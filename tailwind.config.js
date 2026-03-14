/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,vue}',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Mono"', 'system-ui', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('@catppuccin/tailwind')({
      prefix: 'ctp',
      defaultFlavour: 'mocha',
    }),
  ],
}