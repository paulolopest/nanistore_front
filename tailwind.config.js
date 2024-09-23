/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.jsx', '!./node_modules'],
    safelist: ['bg-nodeColor', 'bg-framerColor', 'bg-reactColor, bg-test'],
    theme: {
        extend: {
            colors: {},
            boxShadow: {
                default: '0 2px 8px rgba(0, 0, 0, 0.1)',
                hover: '0 4px 16px rgba(0, 0, 0, 0.2)',
            },
            fontFamily: {},
            backgroundImage: {},
            backgroundColor: {},
            borderColor: {},
            height: {},
            width: {},
            fontSize: {},
        },
    },
    plugins: [],
}
