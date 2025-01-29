import { SERVICE_NAME } from './src/shared/project';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: './src',
  devServer: {
    host: '0.0.0.0',
    port: Number(process.env.PORT || 3000),
  },
  css: ['@/assets/css/styles.scss'],
  modules: ['@element-plus/nuxt', '@nuxtjs/sitemap', '@nuxtjs/tailwindcss', '@nuxt/image'],
  elementPlus: {
    /** Options */
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
      },
    },
  },
  site: {
    url: 'https://games.teracy.link/',
    name: SERVICE_NAME,
    trailingSlash: true,
  },
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'append',
      },
    },
  },
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
});
