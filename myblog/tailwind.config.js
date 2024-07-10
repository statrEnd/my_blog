/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'xs': '20rem',
            'sm': '24rem',
            'md': '576px',
            'lg': '768px',
            'xl': '960px',
            '2xl': '1280px',

        },
        container: {
            center: true,

        },
        extend: {},
    },
    plugins: [
        require('@tailwindcss/container-queries'),
    ],
}