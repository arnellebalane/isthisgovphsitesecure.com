type SiteStatus = 'VALID' | 'INVALID' | 'EXPIRED' | 'INSECURE' | 'UNREACHABLE';

interface Site {
  title: string;
  host: URL;
  status: SiteStatus;
  expiry: Date;
}
