import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
  ],

  css: ['~/assets/css/main.css'],
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
    // Use default image provider
    // Configure domains for external images if needed
    domains: [],
    // Enable automatic optimization
    provider: 'ipx',
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

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  hooks: {
    'nitro:build:done': async (nitro: any) => {
      try {
        const { generateRss } = await import('./server/utils/generateRss')
        const xml = await generateRss()
        const fs = await import('fs/promises')
        const path = await import('path')

        // Write to local public/ for dev preview
        await fs.mkdir(path.join(process.cwd(), 'public'), { recursive: true })
        await fs.writeFile(path.join(process.cwd(), 'public', 'rss.xml'), xml, 'utf8')

        // Write to Nitro build output public directory
        const outDir = nitro.options.output?.dir || nitro.options.outputDir || '.output'
        const publicDir = path.join(outDir, 'public')
        await fs.mkdir(publicDir, { recursive: true })
        await fs.writeFile(path.join(publicDir, 'rss.xml'), xml, 'utf8')

        // eslint-disable-next-line no-console
        console.log('Generated rss.xml in public/ and build output')
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Failed to generate RSS during build:', err)
      }
    }
  },

  nitro: {
    preset: 'cloudflare',
    // Ensure static files are properly served
    publicAssets: [
      {
        dir: 'public',
        maxAge: 60 * 60 * 24 * 365 // 1 year cache for static assets
      }
    ]
  }
})
