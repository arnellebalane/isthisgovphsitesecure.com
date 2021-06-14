const https = require('https');

const STATUS_VALID = 'VALID';
const STATUS_INVALID = 'INVALID';
const STATUS_EXPIRED = 'EXPIRED';
const STATUS_INSECURE = 'INSECURE';
const STATUS_UNREACHABLE = 'UNREACHABLE';

const ERR_EXPIRED = {
  CERT_HAS_EXPIRED: 'CERT_HAS_EXPIRED',
};
const ERR_INVALID = {
  ERR_TLS_CERT_ALTNAME_INVALID: 'ERR_TLS_CERT_ALTNAME_INVALID',
  DEPTH_ZERO_SELF_SIGNED_CERT: 'DEPTH_ZERO_SELF_SIGNED_CERT',
  SELF_SIGNED_CERT_IN_CHAIN: 'SELF_SIGNED_CERT_IN_CHAIN',
  UNABLE_TO_VERIFY_LEAF_SIGNATURE: 'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
  EPROTO: 'EPROTO',
};
const ERR_UNREACHABLE = {
  ETIMEDOUT: 'ETIMEDOUT',
  ENOTFOUND: 'ENOTFOUND',
};

async function getHostCertificateExpiryStatus(host) {
  let [error, certificate] = await getHostCertificate(host);
  if (error?.code in ERR_EXPIRED || error?.code in ERR_INVALID) {
    [error, certificate] = await getHostCertificate(host, { rejectUnauthorized: false });
  }

  if (certificate?.valid_to) {
    const expiry = new Date(certificate.valid_to);
    const now = new Date();

    return {
      status: expiry > now ? STATUS_VALID : STATUS_EXPIRED,
      expiry: certificate.valid_to,
    };
  }

  if (error?.code in ERR_INVALID) {
    return { status: STATUS_INVALID };
  }
  if (error?.code in ERR_UNREACHABLE) {
    return { status: STATUS_UNREACHABLE };
  }
  return { status: STATUS_INSECURE };
}

function getHostCertificate(host, options = {}) {
  return new Promise((resolve) => {
    const request = https.request(
      {
        host,
        port: 443,
        method: 'HEAD',
        ...options,
      },
      (response) => {
        resolve([null, response.socket.getPeerCertificate()]);
      }
    );
    request.on('error', (error) => resolve([error, null]));
    request.end();
  });
}

exports.getHostCertificateExpiryStatus = getHostCertificateExpiryStatus;
exports.getHostCertificate = getHostCertificate;

if (require.main === module) {
  const fs = require('fs');
  const path = require('path');
  const Spinnies = require('spinnies');
  const sites = require('../src/data/sites.json');

  const outputPath = path.resolve(__dirname, '../src/data/sites.json');

  (async () => {
    await new Promise((resolve) => {
      const spinnies = new Spinnies();

      sites.forEach((site, i) => {
        spinnies.add(site.host, { text: `[LOADING] ${site.host}` });

        getHostCertificateExpiryStatus(site.host).then((result) => {
          if (result.status === STATUS_VALID) {
            spinnies.succeed(site.host, { text: `[${result.status}] ${site.host}` });
          } else {
            spinnies.fail(site.host, { text: `[${result.status}] ${site.host}` });
          }

          sites[i] = {
            title: site.title,
            host: site.host,
            logo: site.logo,
            status: result.status,
            expiry: result.expiry,
          };

          if (!spinnies.hasActiveSpinners()) {
            resolve(sites);
          }
        });
      });
    });

    await fs.promises.writeFile(outputPath, JSON.stringify(sites, null, '  ') + '\n');
    process.exit(0);
  })();
}
