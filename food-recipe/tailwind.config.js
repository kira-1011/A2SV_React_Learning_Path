/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#FF5363',
        secondary: {
          100: '#E2DA2D',
          200: '#777772'
        }
      },

      fontFamily: {
        caveat: ['Caveat']
      }
    }
  },
  plugins: [],
}