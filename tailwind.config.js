/** @type {import('tailwindcss').Config} */

import fadeAnimation from "./assets/animations/fade-animation.js";
import menuBarAnimation from "./assets/animations/menu-bar-animation.js";

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
            keyframes: {
                ...fadeAnimation.keyframes,
                ...menuBarAnimation.keyframes,
            },
            animation: {
                ...fadeAnimation.animation,
                ...menuBarAnimation.animation,
            },
            colors: {
                main: "#5645ff",
                dark: "#242121",
                lightgray: "#f8f8f8",
            },
            outline: {
                none: "0px",
            },
        },
    },
    plugins: [],
};
