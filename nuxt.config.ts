// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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

