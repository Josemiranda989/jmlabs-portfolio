import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jmlabs.app',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap()],
});
