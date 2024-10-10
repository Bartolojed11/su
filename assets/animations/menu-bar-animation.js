module.exports = {
    keyframes: {
        collapse: {
            "0%": { "max-height": "294.4px" },
            "100%": { "max-height": 0 },
            // "100%": { opacity: "1", transform: "scale(1)" },
        },
        extend: {
            "0%": { "max-height": 0 },
            "100%": { "max-height": "294.4px" },
        },
    },
    animation: {
        collapse: "collapse .5s ease-in forwards",
        extend: "extend .5s ease-in forwards",
    },
};
