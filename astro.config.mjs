// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import icon from 'astro-icon';
import Fonts from 'unplugin-fonts/vite';

import mdx from '@astrojs/mdx';
import alpinejs from '@astrojs/alpinejs';
import node from '@astrojs/node';

import db from '@astrojs/db';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://helltop.net/',
  output: 'server',
  vite: {
    ssr: {
      external: [
        '@astrojs/alpinejs',
        '@astrojs/cloudflare',
        '@astrojs/db',
        '@astrojs/internal-helpers',
        '@astrojs/mdx',
        '@astrojs/node',
        '@astrojs/rss',
        '@astrojs/svelte',
        'astro-icon',
        '@iconify/utils'
      ],
      noExternal: ['@astrojs/node'],
    },
    resolve: {
      alias: {
        'node-fetch': 'fetch',
        debug: path.resolve(__dirname, './src/utils/debug-mock.js'),
      },
    },
    plugins: [
      tailwindcss(),
      Fonts({
        google: {
          families: [
            {
              name: 'Space Mono',
              styles: 'ital,wght@0,400;0,700;1,400;1,700',
            },
          ],
        },
      }),
    ]
  },

  integrations: [svelte(), icon(), mdx(), alpinejs(), db()],
  adapter: node({
    mode: 'standalone',
  })
});
