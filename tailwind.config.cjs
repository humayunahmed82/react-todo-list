/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // xs: "320px",
      // sm: "576px",
      // md: "768px",
      // lg: "992px",
      // xl: "1280px",
      // "2xl": "1536px",
      // "3xl": "1920px",

      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '15px',
        },
      },

      colors: {
        primary: '#8b005d',
      },
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
        },
      });
    },
  ],
};
