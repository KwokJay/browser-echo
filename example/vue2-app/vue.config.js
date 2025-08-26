module.exports = {
  devServer: {
    proxy: {
      '/__client-logs': {
        target: 'http://127.0.0.1:5179',
        changeOrigin: true,
      },
    },
  },
};
