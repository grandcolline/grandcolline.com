import { defineConfig, presetWind3 } from "unocss";

export default defineConfig({
  content: {
    pipeline: {
      include: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    },
  },
  presets: [presetWind3()],
  theme: {
    width: {
      "700": "700px",
    },
    fontFamily: {
      inter:
        "Inter, GenJyuuGothicL, Hiragino Kaku Gothic ProN, Hiragino Sans, Meiryo, sans-serif",
    },
  },
});
