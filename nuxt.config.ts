// @ts-nocheck

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      '~/assets/style/scss/fonts',
      '@izanagi-ui/core',
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '@izanagi-ui/core'; @import '~/assets/style/scss/fonts';"
        }
      }
    },
  },
});
