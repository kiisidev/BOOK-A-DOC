/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        dark: "#181818",
        hint: '#014DD5',
        secondaryText:"#7E7E7E",
        midAsh:"#D6DFE8",
        midWhite:"#ECEEF0"
       
      },
      fontFamily: {
        sora: ["Sora","sans-serif"]
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
