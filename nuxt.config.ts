import tailwindcss from '@tailwindcss/vite'
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
    '@nuxtjs/sitemap',
    'nuxt-security',
    '@nuxtjs/google-fonts',
  ],

  site: {
    url: 'https://helltop.net',
    cover: '/cover.jpg',
    siteName: 'helltop.net',
    siteUrl: 'https://helltop.net/',
    socials: {
      liberapay: {
        user: 'anoraktrend',
        icon: 'lucide-heart-handshake'
      },
      github: {
        repo: 'anoraktrend/helltop',
        icon: 'lucide-github'
      },
      codeberg: {
        user: 'anoraktrend',
        icon: 'lucide-git-branch'
      },
      mastodon: {
        user: '@lucyinchat',
        host: 'tech.lgbt',
        icon: 'lucide-mastodon'
      },
      bluesky: {
        user: 'lucy.helltop.net',
        icon: 'lucide-cloud'
      },
    },
  },

  sitemap: {
    zeroRuntime: true,
  },

  security: {
    nonce: false,
    sri: false,
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
    },
  },

  icon: {
    serverBundle: 'local',
    collections: ['lucide'],
    customCollections: [
      {
        prefix: 'my-icons',
        dir: './app/assets/icons'
      }
    ],
    global: true,
  },

  studio: {
    enabled: true,
    repository: {
      owner: 'anoraktrend',
      repo: 'Helltop',
      branch: 'main'
    }
  },

  googleFonts: {
    families: {
      'Space Mono': {
        wght: [400, 700],
        ital: [400, 700]
      }
    },
    display: 'swap',
  },

  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },

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
    plugins: [
      tailwindcss(),
    ],
    build: {
      sourcemap: false
    }
  },

  hooks: {
    'vite:extendConfig'(viteInlineConfig) {
      // Strip problematic deeply-nested dependencies injected by Nuxt Content/MDC
      if (viteInlineConfig.optimizeDeps?.include) {
        viteInlineConfig.optimizeDeps.include = viteInlineConfig.optimizeDeps.include.filter((id) => !id.includes('@nuxtjs/mdc'))
      }
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
