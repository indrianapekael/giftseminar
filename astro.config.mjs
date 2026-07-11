import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';
import siteConfig from './src/site.config.ts';

// https://astro.build/config
export default defineConfig({
  // Vercel deployment settings
  site: 'https://your-vercel-domain.vercel.app',
  integrations: [mdx(), ...(siteConfig.features.sitemap ? [sitemap()] : [])],
  outDir: './build',
  adapter: vercel(),
  output: 'server',
  vite: {
    build: {
      cssMinify: true
    }
  },
  // Allow Astro to use default image service or Vercel's Image Optimization automatically
  // Markdown is handled by Sätteri (Astro 7 default). GFM — tables, task
  // lists, footnotes — is enabled out of the box, so no config is needed.
  server: {
    port: 3000,
    host: true
  },
  devToolbar: {
    enabled: true
  }
});