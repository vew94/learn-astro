---
title: "ESLint"
author: "vew94"
created: 2024-05-11
tags: ["ESLint"]
---

## 💻 Environment

```console
Astro                    v4.8.2
Node                     v22.1.0
System                   macOS (arm64)
Package Manager          pnpm
Output                   static
Adapter                  none
Integrations             @astrojs/mdx
                         @astrojs/sitemap
```

## 🛠️ How to use

Install packages by `pnpm install`.

```bash
pnpm install
```

Find and replace `http://localhost:4321` to your website domain.

- [`astro.config.mjs`](./astro.config.mjs)

Fix locale settings. This template defines `ja`.

- [`astro.config.mjs`](./astro.config.mjs)
- [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro), `<html lang="...">`.

## 🚀 Integrated packages

- Astro official
  - [@astrojs/mdx](https://docs.astro.build/guides/integrations-guide/mdx/)
  - [@astrojs/prism](https://docs.astro.build/ja/reference/api-reference/#prism-)
  - [@astrojs/sitemap](https://docs.astro.build/guides/integrations-guide/sitemap/)
- ESLint
  - [ESLint Stylistic](https://eslint.style)
  - [typescript-eslint](https://typescript-eslint.io)
  - [eslint-plugin-astro](https://ota-meshi.github.io/eslint-plugin-astro/)
  - [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
  - [eslint-plugin-perfectionist](https://eslint-plugin-perfectionist.azat.io)
- [Pagefind](https://pagefind.app)

## 📘 Tips

### Built-in Components

- [`<Code />`](https://docs.astro.build/ja/reference/api-reference/#code-)
- [`<Content /`](https://docs.astro.build/ja/reference/api-reference/#content-)
- [`<Debug />`](https://docs.astro.build/ja/reference/api-reference/#debug-)
- [`<Image />`](https://docs.astro.build/ja/reference/api-reference/#image-)
- [`<Picture />`](https://docs.astro.build/ja/reference/api-reference/#picture-)
- [`<Prism />`](https://docs.astro.build/ja/reference/api-reference/#prism-)
- [`<ViewTransitions />`](https://docs.astro.build/ja/reference/api-reference/#viewtransitions-)
