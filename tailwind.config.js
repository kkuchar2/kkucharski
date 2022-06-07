module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    variants: {
        fill: ['hover', 'focus'], // this line does the trick
    },
    plugins: [],
};