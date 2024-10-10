module.exports = {
    keyframes: {
        fadeIn: {
            "0%": { opacity: "0", transform: "scale(0)" },
            "1%": { opacity: "0", transform: "scale(.999)" },
            "100%": { opacity: "1", transform: "scale(1)" },
        },
        fadeOut: {
            "0%": { opacity: "1", transform: "scale(1)" },
            "1%": { opacity: "1", transform: "scale(.001)" },
            "100%": { opacity: "0", transform: "scale(0)" },
        },
    },
    animation: {
        "fade-in": "fadeIn .5s ease-in forwards",
        "fade-out": "fadeOut 0.5s ease-out forwards",
    },
};
