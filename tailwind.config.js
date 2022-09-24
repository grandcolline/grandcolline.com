/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        700: "700px",
      },
      fontFamily: {
        gilmer: ["gilmer-web", "Gilmer", "sans-serif"],
        metro: ["metro-web", "Menlo", "sans-serif"],
      },
    },
  },
  plugins: [],
}
