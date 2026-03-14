/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,vue}',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Mono"', 'monospace'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('@catppuccin/tailwindcss')({
      defaultFlavour: 'latte'
    }),
  ],
}