/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      animation:{
        "loop-scroll": "loop-scroll 15s linear infinite"
      },
      keyframes:{
        "loop-scroll": {
          from: { transform: "translateX(0)"},
          to: { transform: "translateX(-100%)"},
        }
      },
      colors:{
       "bg-button": "#00112e",
       "peach": "#f0b27a",
       "gray-color": "#475467",
       "skyblue": "#f2f4f7",
       "orangge": "#e67e22",
       "light-pink": "#fae5d3",
       "card-bg": "#001c4d",
      },
      spacing:{
        "big":"48rem",
        "line-height": "1.5",
      }
    },
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1040px",
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

