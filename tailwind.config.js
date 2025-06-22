/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        tablet: "820px"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        heading: "100px",
      },
      colors: {
        primary: "var(--color-primary)",
        text: "var(--color-text)",
        secondary: "var(--color-ssecondary)",
        bg: "var(--color-bg)",
      },
    },
  },
  plugins: [],
};
