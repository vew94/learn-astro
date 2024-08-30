import eslint from "@eslint/js";
import eslintStylistic from "@stylistic/eslint-plugin";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPerfectionist from "eslint-plugin-perfectionist";
import eslintPluginPerfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      ".astro/**/*",
      "dist/**/*",
      "node_modules/**/*",
      "public/**/*",
    ],
  },
  eslintStylistic.configs["all-flat"],
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...eslintPluginAstro.configs["flat/all"],
  ...eslintPluginAstro.configs["flat/jsx-a11y-strict"],
  eslintPluginPerfectionistNatural,
  {
    plugins: {
      "@stylistic": eslintStylistic,
    },
    rules: {
      "@stylistic/array-bracket-newline": [
        "error", {
          minItems: 2,
          multiline: false,
        },
      ],
      "@stylistic/array-bracket-spacing": [
        "error", "never",
      ],
      "@stylistic/array-element-newline": [
        "error", {
          minItems: 3,
          multiline: false,
        },
      ],
      "@stylistic/arrow-parens": [
        "error", "always",
      ],
      "@stylistic/arrow-spacing": [
        "error", {
          after: true,
          before: true,
        },
      ],
      "@stylistic/block-spacing": [
        "error", "always",
      ],
      "@stylistic/brace-style": [
        "error", "1tbs",
      ],
      "@stylistic/comma-dangle": [
        "error", "always-multiline",
      ],
      "@stylistic/comma-spacing": [
        "error", {
          after: true,
          before: false,
        },
      ],
      "@stylistic/comma-style": [
        "error", "last",
      ],
      "@stylistic/computed-property-spacing": [
        "error", "never",
      ],
      "@stylistic/dot-location": [
        "error", "property",
      ],
      "@stylistic/eol-last": [
        "error", "always",
      ],
      "@stylistic/function-call-argument-newline": [
        "error", "always",
      ],
      "@stylistic/function-call-spacing": [
        "error", "never",
      ],
      "@stylistic/function-paren-newline": [
        "error", "multiline",
      ],
      "@stylistic/generator-star-spacing": [
        "error", {
          after: true,
          before: true,
        },
      ],
      "@stylistic/indent": [
        "error",
        2,
        {
          ArrayExpression: "first",
          CallExpression: {
            arguments: "first",
          },
          FunctionDeclaration: {
            parameters: "first",
          },
          FunctionExpression: {
            parameters: "first",
          },
          ImportDeclaration: "first",
          MemberExpression: 1,
          ObjectExpression: "first",
          SwitchCase: 1,
          VariableDeclarator: 2,
          flatTernaryExpressions: true,
          offsetTernaryExpressions: false,
        },
      ],
      "@stylistic/indent-binary-ops": [
        "error", 2,
      ],
      "@stylistic/no-extra-parens": [
        "error",
        "all",
        {
          ignoreJSX: "multi-line",
        },
      ],
      "@stylistic/object-curly-newline": [
        "error", {
          ObjectExpression: "always",
          ObjectPattern: "never",
        },
      ],
      "@stylistic/object-curly-spacing": [
        "error",
        "always",
        {
          arraysInObjects: true,
          objectsInObjects: true,
        },
      ],
      "@stylistic/padded-blocks": [
        "error", "never",
      ],
      "@stylistic/quote-props": [
        "error", "as-needed",
      ],
      "@stylistic/space-before-function-paren": [
        "error", "never",
      ],
    },
  },
  {
    plugins: {
      astro: eslintPluginAstro,
    },
    rules: {
      "astro/no-exports-from-components": "off",
    },
  },
  {
    plugins: {
      perfectionist: eslintPerfectionist,
    },
    rules: {
      "perfectionist/sort-imports": [
        "error", {
          "custom-groups": {
            type: {
              components: "components",
              layouts: "layouts",
            },
            value: {
              components: "@/components/**",
              layouts: "@/layouts/**",
            },
          },
          groups: [
            "external-type",
            "layouts",
            "components",
            "unknown",
          ],
          "newlines-between": "always",
          order: "asc",
          type: "natural",
        },
      ],
    },
  },
  {
    files: ["src/components/Head/*.astro"],
    plugins: {
      perfectionist: eslintPerfectionist,
    },
    rules: {
      "perfectionist/sort-astro-attributes":
        "off",
    },
  },
];
