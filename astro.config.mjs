// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import icon from 'astro-icon';
import Fonts from 'unplugin-fonts/vite';
import mdx from '@astrojs/mdx';
import alpinejs from '@astrojs/alpinejs';
import db from '@astrojs/db';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cloudflare from '@astrojs/cloudflare';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://helltop.net',
  output: 'server',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        imageService: 'compile',
      },
    },
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [db(), svelte(), icon(), mdx(), alpinejs()],
  vite: {
    resolve: {
      alias: {
        'node-fetch': 'fetch',
        debug: path.resolve(__dirname, './src/utils/debug-mock.js'),
      },
    },
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
