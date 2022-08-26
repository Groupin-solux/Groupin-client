import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
  app.use(
    createProxyMiddleware('/', {
      target: 'https://groupin-songpyeon.herokuapp.com/',
      changeOrigin: true,
    })
  );
};


