// https://nuxt.com/docs/api/configuration/nuxt-config
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
export default defineNuxtConfig({
  runtimeConfig: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  },
  // vite: {
  //   build: {
  //     rollupOptions: {
  //       output: {
  //         // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
  //         sanitizeFileName(name) {
  //           const match = DRIVE_LETTER_REGEX.exec(name);
  //           const driveLetter = match ? match[0] : "";
  //           return (
  //             driveLetter +
  //             name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
  //           );
  //         },
  //       },
  //     },
  //   },
  // },
  ssr: false,
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: "/images/favicon.png" }]
    }
  },
  devtools: { enabled: true },
  css: [
    "@/assets/css/main.scss",
    'primevue/resources/themes/aura-light-green/theme.css'
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

