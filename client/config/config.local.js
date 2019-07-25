export default {
  define: {
    'window.DEV': true,
  },
  proxy: {
    '/api': {
      target: 'http://10.10.16.217:8001/',
      changeOrigin: true,
    },
  },
};
