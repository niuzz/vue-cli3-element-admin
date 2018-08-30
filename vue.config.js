const connect = require('./src/api/connect');

module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: connect.path,
        changeOrigin: true,
      },
    },
  },
};
