const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/v1', {
      target: 'https://groupin-songpyeon.herokuapp.com/',
      changeOrigin: true,
    })
  );
};