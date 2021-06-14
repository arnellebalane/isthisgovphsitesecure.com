const path = require('path');
const VuePlugin = require('@vitejs/plugin-vue');

module.exports = {
  plugins: [VuePlugin()],

  resolve: {
    alias: {
      '@components': path.resolve('src/components'),
    },
  },
};
