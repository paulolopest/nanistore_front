/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    safelist: ['bg-nodeColor', 'bg-framerColor', 'bg-reactColor, bg-test'],
    theme: {
        extend: {
            colors: {
                bgBlue: '#02091a',
                bgPurple: '#0c0c0c',
                bgBlack: '#171717',
            },

            boxShadow: {
                default: '0 2px 8px rgba(0, 0, 0, 0.1)',
                hover: '0 4px 16px rgba(0, 0, 0, 0.2)',
            },

            fontFamily: {},

            backgroundImage: {
                reactColor: 'linear-gradient(101deg, #397e91 0%, #5ed3f3 100%)',
                nodeColor: 'linear-gradient(101deg, #3b6331 0%, #94c745 100%)',
                framerColor: 'linear-gradient(101deg, #ac58e1 0%, #e72b8a 100%)',
            },

            backgroundColor: {
                line: '#8D94A6',
                customCard: '#192747',
                nodeColor: '#3b6331',
                framerColor: '#99207f',
            },
            borderColor: {
                customBlue: '#0f172a',
            },
            height: {
                bigHeight: '50rem',
                tiny: '1px',
            },
            width: {
                tiny: '1px',
            },

            fontSize: {
                nameSize: '10rem',
            },
        },
    },
    plugins: [],
}
