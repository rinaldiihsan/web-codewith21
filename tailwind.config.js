/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        rem: ['REM'],
      },
      screens: {
        handphone: '300px',
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
      colors: {
        myGray: '#f5f5f5',
        myBlack: '#101010',
        myBlue: '#009ff6'
      },
    },
  },
  plugins: [],
};
