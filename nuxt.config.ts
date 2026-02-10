import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
  ],

  css: ['~/assets/css/main.css'],
  // @ts-expect-error colorMode module config
  colorMode: { classSuffix: '' },

  content: {
    database: {
      type: 'd1',
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
    // Use Cloudflare compatible image provider
    provider: 'none',
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
    preset: 'cloudflare-pages',
    prerender: {
      autoSubfolderIndex: false,
      routes: ['/', '/blog', '/rss.xml', '/cover.jpg'],
      crawlLinks: true
    }
  }
})
