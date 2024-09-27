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
            fontSize: {
                8: '4rem',
                7: '3.5rem',
                6: '3rem',
                5: '2.5rem',
                4: '2rem',
                3: '1.5rem',
                2: '1rem',
                1: '0.5rem',
            },

            textColor: {
                default: '#262626',
                subtitle: '#737373 ',
                body: '#a3a3a3',
            },
        },
    },
    plugins: [],
}
