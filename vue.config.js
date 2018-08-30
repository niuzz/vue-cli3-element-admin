module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://fagao.chinabyte.com/index.php',
        changeOrigin: true,
      },
    },
  },
};
