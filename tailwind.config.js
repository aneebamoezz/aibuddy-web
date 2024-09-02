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
      },
      spacing:{
        "big":"48rem"
      }
    },
    screens:{
      sm:"480px",
      md:"768px",
      lg:"940px",
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

