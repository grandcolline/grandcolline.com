// @ts-check
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import transformerDirective from '@unocss/transformer-directives'

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
      transformers: [transformerDirective()],
    }),
  ],
});
