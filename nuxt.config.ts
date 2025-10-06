// Path: nuxt-frontend/nuxt.config.ts

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/eslint"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      strapiUrl: process.env.STRAPI_URL || 'http://localhost:1338',
      strapiApiToken: process.env.STRAPI_API_TOKEN || '',
    },
  },
});
