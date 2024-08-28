/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
       "bg-button": "#00112e",
       "peach": "#f0b27a",
       "gray-color": "#475467"
      },
      spacing:{
        "big":"48rem"
      }
    },
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
    },
    fontFamily:{
      plus:["Plus Jakarta Sans", 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

