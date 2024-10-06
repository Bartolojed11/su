// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "~/assets/scss/main.scss",
  ],
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },
});
