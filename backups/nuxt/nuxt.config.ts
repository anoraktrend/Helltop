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
        icon: 'i-simple-icons-liberapay'
      },
      github: {
        repo: 'anoraktrend/helltop',
        icon: 'i-simple-icons-github'
      },
      codeberg: {
        user: 'anoraktrend',
        icon: 'i-simple-icons-codeberg'
      },
      mastodon: {
        user: '@lucyinchat',
        host: 'tech.lgbt',
        icon: 'i-simple-icons-mastodon'
      },
      bluesky: {
        user: 'lucy.helltop.net',
        icon: 'i-simple-icons-bluesky'
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
    mode: 'svg',
    serverBundle: 'local',
    collections: ['lucide', 'simple-icons', 'catppuccin'],
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
    tailwindcss: {
      inject: true,
      addFontTo: 'theme.extend.fontFamily.sans'
    }
  },

  css: ['~~/app/assets/css/main.css'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },

  content: {
    database: process.env.NODE_ENV === 'production' ? {
      type: 'd1',
      binding: 'DB'
    } : undefined,
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

  hooks: {
    'prepare:types'({ tsConfig }) {
      // Remove missing vue-router plugin from generated tsconfig to fix vue-component-meta warning
      if (tsConfig.vueCompilerOptions?.plugins) {
        tsConfig.vueCompilerOptions.plugins = tsConfig.vueCompilerOptions.plugins.filter(
          (p: string) => p !== 'vue-router/volar/sfc-route-blocks'
        )
      }
    },
    'vite:extendConfig'(viteInlineConfig) {
      // Strip problematic deeply-nested dependencies injected by Nuxt Content/MDC
      if (viteInlineConfig.optimizeDeps?.include) {
        viteInlineConfig.optimizeDeps.include = viteInlineConfig.optimizeDeps.include.filter((id) => !id.includes('@nuxtjs/mdc'))
      }
    }
  },

  nitro: {
    preset: process.env.NODE_ENV === 'production' ? 'cloudflare-module' : undefined,
    prerender: {
      autoSubfolderIndex: false,
      routes: ['/', '/blog', '/rss.xml', '/cover.jpg'],
      crawlLinks: true
    }
  },

})
