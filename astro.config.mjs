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
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://helltop.net/',
  output: 'server',
  adapter: cloudflare(),
  compressHTML: true,
  markdown: {
    syntaxHighlight: 'prism',
  },
  integrations: [
    svelte(), 
    icon({
      include: {
        lucide: ['share-2', 'x', 'rss', 'arrow-left', 'calendar', 'clock', 'user', 'chevron-up', 'arrow-right', 'log-out', 'trash-2', 'reply', 'mail'],
        'simple-icons': ['liberapay', 'github', 'codeberg', 'mastodon', 'bluesky', 'forgejo', 'nextcloud', 'jellyfin', 'immich', 'authelia', 'vaultwarden'],
      },
    }), 
    mdx(), 
    alpinejs(), 
    sitemap()
  ],
  vite: {
    resolve: {
      alias: {
        debug: fileURLToPath(new URL('./src/utils/debug-mock.js', import.meta.url)),
      },
    },
    ssr: {
      noExternal: ['debug'],
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
    ],
  },
});
