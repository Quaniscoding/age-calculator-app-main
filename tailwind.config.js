/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
        screens: {
            'sm': '375px',
            'xl': '1440px'
        }
    },
    plugins: [],
}