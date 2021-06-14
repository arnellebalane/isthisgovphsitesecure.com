const path = require('path');
const VuePlugin = require('@vitejs/plugin-vue');

module.exports = {
  plugins: [VuePlugin()],

  resolve: {
    alias: {
      '@assets': path.resolve('src/assets'),
      '@components': path.resolve('src/components'),
      '@data': path.resolve('src/data'),
      '@styles': path.resolve('src/styles'),
    },
  },
};
