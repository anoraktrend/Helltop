export default defineAppConfig({
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
})
