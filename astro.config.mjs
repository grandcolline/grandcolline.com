// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import transformerDirective from '@unocss/transformer-directives'
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },

    imageService: "cloudflare"
  }),
  integrations: [
    UnoCSS({
      injectReset: true,
      transformers: [transformerDirective()],
    }),
  ],
});
