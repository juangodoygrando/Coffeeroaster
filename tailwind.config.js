/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,css,js}"],
  theme: {
    extend: {
      // Design system tokens (see style guide)
      colors: {
        coffee: {
          cyan: "#0E8784",
          "dark-blue": "#333D4B",
          "pale-orange": "#FDD6BA",
          cream: "#FEFCF7",
          grey: "#83888F",
        },
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
