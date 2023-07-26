/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["././**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors:{
        primary: '#ef5030',
      },
      boxShadow: {
        'Header': '0 10px 10px -10px rgba(0, 0, 0, 0.35)',
      }

    },
  },
  plugins: [],
}