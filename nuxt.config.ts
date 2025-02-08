// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', 'nuxt-icon', '@nuxtjs/google-fonts'],

  googleFonts: {
    download: true,
    inject: true,
    families: {
      'Nunito': [400, 700]
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'jfort D479 Prototype'
    }
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
