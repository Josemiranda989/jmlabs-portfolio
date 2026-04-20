import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jmlabs.app',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
  },
});
