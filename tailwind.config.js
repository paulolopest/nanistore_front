/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.jsx', '!./node_modules'],
    theme: {
        extend: {
            colors: {},
            boxShadow: {
                default: '2px 4px 12px #00000014',
                hover: '2px 4px 16px #00000029',
            },
            height: {
                tiny: '1px',
            },
            width: {
                tiny: '1px',
            },
            fontFamily: {},
            backgroundImage: {},
            backgroundColor: {},
            borderColor: {},
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
                default: '#404040',
                subtitle: '#737373 ',
                body: '#a3a3a3',
            },
            borderWidth: {
                1: '1px',
            },
        },
    },
    plugins: [],
}
