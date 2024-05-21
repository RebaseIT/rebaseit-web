// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  },
  ssr: false,
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: "favicon.ico" }]
    }
  },
  devtools: { enabled: true },
  css: [
    "@/assets/css/main.scss"
  ],
  modules: [
    '@vueuse/nuxt',
    ['@nuxtjs/eslint-module', { /* module options */ }]
  ],
  build: {
    transpile: ["primevue"]
  },
  components:[
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})

