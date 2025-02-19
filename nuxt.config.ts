import { SERVICE_NAME } from './src/shared/project';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: './src',
  // devServer: {
  //   host: process.env.HOST || '0.0.0.0',
  //   port: Number(process.env.PORT || 3000),
  // },
  css: ['@/assets/css/styles.scss'],
  modules: ['@element-plus/nuxt', '@nuxtjs/sitemap', '@nuxtjs/tailwindcss', '@nuxt/image'],
  elementPlus: {
    /** Options */
  },
  app: { head: { htmlAttrs: { lang: 'ja' } } },
  site: { url: 'https://games.teracy.link/', name: SERVICE_NAME, trailingSlash: true },
  experimental: { defaults: { nuxtLink: { trailingSlash: 'append' } } },
  nitro: {
    //   prerender: {
    //     failOnError: false,
    //   },
    prerender: {
      routes: ['/'], // SSGで生成するページ
    },
    routeRules: {
      '/_nuxt/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
      '/**': { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' } },
    },
  },
});
