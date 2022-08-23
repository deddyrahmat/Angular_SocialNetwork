/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRedCustom: {
          DEFAULT: "#953E46",
          200:"#E19E98"
        },
        primaryYellowCustom: {
          DEFAULT: "#F4E3CF",
        },
      }
    },
  },
  plugins: [],
}
