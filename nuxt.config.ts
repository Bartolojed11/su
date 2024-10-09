// https://nuxt.com/docs/api/configuration/nuxt-config

import type { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
    modules: ["@nuxtjs/tailwindcss"],
    buildModules: ["@nuxt/typescript-build"],
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    css: [
        "@fortawesome/fontawesome-svg-core/styles.css",
        "~/assets/styles/main.css",
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
        postcss: {
            postcssOptions: {
                plugins: {
                    "postcss-import": {},
                    "tailwindcss/nesting": {},
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    typescript: {
        typeCheck: {
            eslint: {
                files: "./**/*.{ts,js,vue}",
            },
        },
    },
    tailwindcss: {
        cssPath: ["~/assets/styles/main.css", { injectPosition: "first" }],
        configPath: "./tailwind.config.js",
        exposeConfig: {
            level: 4,
            alias: "tw",
        },
        config: {},
        viewer: true,
        editorSupport: { autocompleteUtil: { as: "tailwindClasses" } },
    },
};

export default config;
