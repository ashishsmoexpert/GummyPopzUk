import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        about: resolve(__dirname, 'about.html'),
        stockists: resolve(__dirname, 'stockists.html'),
        wholesale: resolve(__dirname, 'wholesale.html'),
        contact: resolve(__dirname, 'contact.html'),
        faqs: resolve(__dirname, 'faqs.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        cookies: resolve(__dirname, 'cookies.html'),
        shipping: resolve(__dirname, 'shipping.html'),
      },
    },
  },
});
