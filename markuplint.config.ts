import type { Config } from "@markuplint/ml-config";

const config: Config = {
  extends: ["markuplint:recommended"],
  parser: {
    "\\.astro": "@markuplint/astro-parser",
  },
  parserOptions: {
    authoredElementName: ["content"],
    ignoreFrontMatter: true,
  },
  rules: {
  },
};

export default config;
