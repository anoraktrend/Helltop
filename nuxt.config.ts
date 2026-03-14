import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
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
    'nuxt-studio',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
    'nuxt-security',
  ],

  site: {
    url: 'https://helltop.net',
  },

  sitemap: {
    zeroRuntime: true,
  },

  security: {
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
    },
  },

  googleFonts: {
    families: {
      'Space Mono': {
        wght: [400, 700],
        ital: [400, 700]
      }
    }
  },

  icon: {
    serverBundle: 'local',
    collections: ['simple-icons'],
    customCollections: [
      {
        prefix: 'my-icons',
        dir: './app/assets/icons'
      }
    ]
  },

  studio: {
    enabled: true,
    repository: {
      owner: 'anoraktrend',
      repo: 'Helltop',
      branch: 'main'
    }
  },

  css: ['~/assets/css/main.css'],
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
      crawlLinks: true
    }
  }
})
