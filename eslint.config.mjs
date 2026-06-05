import json from "@eslint/json";
import html from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";

export default [
  // 1. Global Ignores
  {
    ignores: [
      "**/node_modules/**",
      "**/_site/**",
      "package-lock.json"
    ]
  },

  // 2. JavaScript Files Config
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        addEventListener: "readonly",
        removeEventListener: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
  },

  // 3. Strict JSON Files Config
  {
    files: ["**/*.json"],
    ignores: ["**/devcontainer.json", "**/tsconfig.json", "**/jsconfig.json"],
    language: "json/json",
    plugins: {
      json
    },
    rules: {
      "json/no-duplicate-keys": "error",
      "json/no-empty-keys": "error"
    }
  },

  // 4. JSONC Files Config (Allows Comments)
  {
    files: ["**/*.jsonc", "**/devcontainer.json", "**/tsconfig.json", "**/jsconfig.json"],
    language: "json/jsonc",
    plugins: {
      json
    },
    rules: {
      "json/no-duplicate-keys": "error"
    }
  },

  // 5. Nunjucks/HTML Files Config
  {
    files: ["**/*.njk", "**/*.html"],
    plugins: {
      "@html-eslint": html
    },
    languageOptions: {
      parser: htmlParser,
      parserOptions: {
        frontmatter: true,
        templateEngineSyntax: {
          "{{": "}}",
          "{%": "%}",
          "{#": "#}"
        }
      }
    },
    rules: {
      "@html-eslint/no-duplicate-id": "error",
      "@html-eslint/no-duplicate-attrs": "error",
      "@html-eslint/require-doctype": "off",
      "@html-eslint/require-title": "off",
      "@html-eslint/no-inline-styles": "off",
      "@html-eslint/indent": "off"
    }
  }
];


