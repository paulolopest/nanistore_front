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
            screens: {
                1600: '1601px',
                1536: '1537px',
                1440: '1441px',
                1366: '1367px',
                1280: '1281px',
                1200: '1201px',
                1160: '1161px',
                1080: '1081px',
                1024: '1025px',
                950: '951px',
                912: '913px',
                896: '897px',
                844: '845px',
                768: '769px',
                680: '681px',
                640: '641px',
                580: '581px',
                540: '541px',
                500: '501px',
                460: '461px',
                420: '421px',
                380: '421px',
                360: '361px',
            },
        },
    },
    plugins: [],
}
