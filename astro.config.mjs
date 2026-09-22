import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/data/profile";

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});
