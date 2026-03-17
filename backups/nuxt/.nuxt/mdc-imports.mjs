import _RemarkEmoji from 'remark-emoji'
import _Highlight from '/home/lucy/git/Helltop/node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'

export const remarkPlugins = {
  'remark-emoji': { instance: _RemarkEmoji },
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"light":"material-theme-lighter","default":"github-light","dark":"github-dark"}}