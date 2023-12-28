/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                figtree: ["Figtree", "sans-serif"],
            },
            colors: {
              primary: 'hsl(47, 88%, 63%)',
              'neutral-white': 'hsl(0, 0%, 100%)',
              'neutral-grey': 'hsl(0, 0%, 50%)',
              'neutral-black': 'hsl(0, 0%, 7%)',
            },
        },
    },
    plugins: [],
};
