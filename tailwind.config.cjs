/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
};
