module.exports = {
    prefix: '',
    purge: {
        enabled: process?.argv?.indexOf("build") !== -1,
        content: [
            "./src/**/*.html",
            "./src/**/*.ts",
            "./projects/**/*.html",
            "./projects/**/*.ts"
        ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};