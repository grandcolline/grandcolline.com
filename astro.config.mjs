// @ts-check
import cloudflare from "@astrojs/cloudflare";
import transformerDirective from "@unocss/transformer-directives";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },

    imageService: "cloudflare",
  }),
  integrations: [
    UnoCSS({
      injectReset: true,
      transformers: [transformerDirective()],
    }),
  ],
});
