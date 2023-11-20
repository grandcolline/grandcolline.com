import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  server: { host: true }, // NOTE: devcontainer/cli が appPort しか対応していないので全開放している
  integrations: [tailwind(), mdx()],
});
