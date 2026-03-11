import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap' }
      ]
    },
  },
  appConfig: {
    cover: '/cover.jpg',
    siteName: 'helltop.net',
    siteUrl: 'https://helltop.net/',
    icon: {
      aliases: {
        'dark-mode': 'lucide-moon',
        'light-mode': 'lucide-sun',
      },
    },
    socials: {
      liberapay: 'anoraktrend',
      github: 'anoraktrend/helltop',
      mastohost: 'tech.lgbt',
      mastodon: '@lucyinchat',
      bluesky: 'lucy.helltop.net',
      codeberg: 'anoraktrend',
    },
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    oidc: {
      providers: {
        oidc: {
          clientSecret: '' // Fallback, will be overridden by NUXT_OIDC_PROVIDERS_OIDC_CLIENT_SECRET
        }
      }
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    'nuxt-oidc-auth',
  ],
  oidc: {
    defaultProvider: 'oidc',
    providers: {
      oidc: {
        baseUrl: 'https://auth.helltop.net',
        clientId: 'helltop',
        clientSecret: '', // Leave empty to use runtimeConfig/env
        redirectUri: 'https://helltop.net/auth/oidc/callback',
        scope: ['openid', 'profile', 'email'],
      }
    },
    session: {
      automaticRefresh: true,
      expirationCheck: true,
    },
    middleware: {
      globalMiddlewareEnabled: false,
      globalRestrictDefault: false,
    }
  },

  css: ['~/assets/css/main.css'],
  // @ts-expect-error colorMode module config
  colorMode: { classSuffix: '' },

  content: {
    database: {
      type: 'd1',
      binding: 'DB'
    },
    build: {
      markdown: {
        highlight: {
          // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
          theme: {
            dark: 'github-dark',
            default: 'github-light',
          },
        },
      },
    },
  },

  image: {
    // Configure domains for external images if needed
    domains: [],
    // Enable automatic optimization
    format: ['webp', 'avif', 'jpeg', 'png'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
    presets: {
      cover: {
        modifiers: {
          fit: 'cover',
          format: 'webp',
          quality: 80
        }
      },
      avatar: {
        modifiers: {
          fit: 'cover',
          format: 'webp',
          quality: 70,
          width: 100,
          height: 100
        }
      }
    }
  },

  compatibilityDate: '2026-02-07',

  vite: {
    build: {
      sourcemap: false
    }
  },

  nitro: {
    preset: 'cloudflare-module',
    prerender: {
      autoSubfolderIndex: false,
      routes: ['/', '/blog', '/rss.xml', '/cover.jpg'],
      ignore: ['/admin/editor'],
      crawlLinks: true
    },
    hooks: {
      compiled: async (nitro) => {
        const path = require('node:path');
        const fsp = require('node:fs/promises');
        const entry = path.resolve(nitro.options.output.serverDir, 'index.mjs');
        const shimFile = path.resolve(nitro.options.output.serverDir, 'shim.mjs');
        const content = await fsp.readFile(entry, 'utf8');
        
        const shimCode = `
const shim = (n) => ({ run: f => f() });
if (typeof console !== 'undefined') {
  try {
    Object.defineProperty(console, 'createTask', { value: shim, writable: true, configurable: true });
    if (console.Console && console.Console.prototype) {
      Object.defineProperty(console.Console.prototype, 'createTask', { value: shim, writable: true, configurable: true });
    }
  } catch (e) {
    console.createTask = shim;
  }
}
`.replace(/\n/g, ' ');

        await fsp.writeFile(shimFile, shimCode);
        await fsp.writeFile(entry, "import './shim.mjs';\n" + content);
      }
    }
  }
})
