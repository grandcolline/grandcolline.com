import presetWebFonts from "@unocss/preset-web-fonts";
import { defineConfig, presetWind3 } from "unocss";

export default defineConfig({
  content: {
    pipeline: {
      include: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    },
  },
  presets: [
    presetWind3(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sg: ["Sawarabi Gothic", "Inter"],
        vt323: ["VT323", "Inter"],
      },
    }),
  ],
  theme: {
    width: { "700": "700px" },
  },
});
