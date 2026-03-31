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
import remarkToc from 'remark-toc';
import rehypePresetMinify from 'rehype-preset-minify';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://helltop.net/',
  output: 'server',
  adapter: cloudflare(),
  markdown: {
    syntaxHighlight: 'prism',
  },
  integrations: [
    svelte(), 
    icon(), 
    mdx({
      remarkPlugins: [remarkToc],
      rehypePlugins: [rehypePresetMinify],
      remarkRehype: { footnoteLabel: 'Footnotes' },
      gfm: true,
    }), 
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
