/** @type {import('tailwindcss').Config} */
export default {
    prefix: "tw-",
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        fontFamily: {
            sans: ["Josefin Sans", "sans-serif"],
        },
        extend: {
            colors: {
                main: "#5645ff",
                dark: "#242121",
                lightgray: "#f8f8f8",
            },
        },
    },
    plugins: [],
};
