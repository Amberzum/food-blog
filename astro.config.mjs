import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://smallkitchenbigappetite.vercel.app/",
  integrations: [mdx(), sitemap()],
});
