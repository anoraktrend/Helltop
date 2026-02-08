import { defineAppConfig } from 'nuxt/app'

export default defineAppConfig({
  cover: '/cover.jpg',
  siteName: 'helltop.net',
  siteUrl: 'https://helltop.net/',
  socials: {
    liberapay: 'anoraktrend',
    github: 'anoraktrend/helltop',
    mastohost: 'tech.lgbt',
    mastodon: '@lucyinchat',
    bluesky: 'lucy.helltop.net',
    codeberg: 'anoraktrend',
  },
  icon: {
    aliases: {
      'dark-mode': 'lucide-moon',
      'light-mode': 'lucide-sun',
    },
  },
})
