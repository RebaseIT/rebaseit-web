// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "primevue/resources/themes/lara-light-blue/theme.css",
    "@/assets/css/main.scss"
  ],
  modules: [
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

