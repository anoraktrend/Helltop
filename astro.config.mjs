// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import icon from 'astro-icon';
import Fonts from 'unplugin-fonts/vite';
import mdx from '@astrojs/mdx';
import alpinejs from '@astrojs/alpinejs';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://helltop.net/',
  output: 'server',
  adapter: cloudflare(),
  integrations: [svelte(), icon(), mdx(), alpinejs(), sitemap()],
  vite: {
    optimizeDeps: {
      exclude: ['@astrojs/audit', '@astrojs/toolbar', '@astrojs/xray', 'audit', 'toolbar', 'xray']
    },
    plugins: [
      tailwindcss(),
      Fonts({
        google: {
          families: [{
            name: 'Space Mono',
            styles: 'ital,wght@0,400;0,700;1,400;1,700',
          }],
        },
      }),
    ]
  }
});
