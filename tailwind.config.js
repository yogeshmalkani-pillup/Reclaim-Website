const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'dimensions-bg-image': "url('../public/images/footer/dimensions.png')",
                'iphone-bg-image': "url('../public/images/features/iphon15.png')",
            },
            fontFamily: {
                satoshi_regular: ["Satoshi_Regular", "sans-serif"],
                satoshi_bold: ["Satoshi_Bold", "sans-serif"],
                satoshi_medium: ["Satoshi_Medium", "sans-serif"],
                satoshi_light: ["Satoshi_Light", "sans-serif"],
                satoshi_regular: ["Satoshi_Regular", "sans-serif"]
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [addVariablesForColors],
};


function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}