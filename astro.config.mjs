import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://chrisnash.earth',
  integrations: [sitemap()],
  build: { format: 'directory' }
});
