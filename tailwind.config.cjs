/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      width: {
        700: "700px",
      },
      fontFamily: {
        inter: ["Inter", "GenJyuuGothicL", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Meiryo,sans-serif"],
      },
    },
  },
  plugins: [],
};
