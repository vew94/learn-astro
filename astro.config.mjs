import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  compressHTML: false,
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },
  integrations: [
    mdx(), sitemap({
      i18n: {
        defaultLocale: "ja",
      },
    }),
  ],
  markdown: {
    syntaxHighlight: "prism",
  },
  site: "http://localhost:4321",
});
