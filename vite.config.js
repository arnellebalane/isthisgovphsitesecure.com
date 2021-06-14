import path from 'path';
import VuePlugin from '@vitejs/plugin-vue';

export default {
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
