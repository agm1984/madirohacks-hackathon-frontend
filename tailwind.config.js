const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        fontFamily: {
            'sans': ['OpenSans', 'Arial', 'sans-serif'],
            manrope: ['Manrope', 'Arial', 'sans-serif'],
        },
        extend: {
            maxWidth: {
                // '1640': '102.5rem',
                // '1920': '120rem',
            },
            width: {
                // pane: '33rem',
            },
            height: {
                'screen-minus-nav': 'calc(100vh - 4rem)',
            },
            colors: {
               brand: {
                   100: '#f0f4ff',
                   200: '#024FE8',
                   300: '#D6DAFA',
                   400: '#FAFAFA',
               },
            },
            fontSize: {
                footer: '0.825rem',
                'xs': '.75rem',
                'sm': '.875rem',
                'tiny': '.875rem',
                'base': '1rem',
                'lg': '1.1rem',
                'xl': '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.75rem',
                '4xl': '2rem',
                '5lg': '3.125rem',
                '5xl': '3.5rem',
                '6xl': '9.5rem',
                '7xl': '15.625rem',
            },
            gridTemplateColumns: {
            },
            backgroundImage: theme => ({
            }),
        },
    },
    variants: {},
    plugins: [],
    purge: {
        content: [
            `components/**/*.{vue,js}`,
            `layouts/**/*.vue`,
            `pages/**/*.vue`,
            `plugins/**/*.{js,ts}`,
            `nuxt.config.{js,ts}`
        ]
    }
}
