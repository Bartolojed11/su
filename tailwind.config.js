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
    colors: {
      main: "#5645ff",
      dark: "#242121",
    },
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
