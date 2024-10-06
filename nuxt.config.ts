// https://nuxt.com/docs/api/configuration/nuxt-config

import type { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  buildModules: ["@nuxt/typescript-build"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "~/assets/scss/main.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },
};

export default config;
