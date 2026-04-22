import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://jmlabs.app',
  trailingSlash: 'never',

  build: {
    inlineStylesheets: 'auto',
  },

  integrations: [sitemap()],
  adapter: cloudflare()
});