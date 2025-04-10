import typescriptEslintParser from "@typescript-eslint/parser";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginSortKeysFix from "eslint-plugin-sort-keys-fix";

import globals from "globals";

export default [
  {
    files: ["**/*.{m,}{j,t}s{x,}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.commonjs,
        ...globals.node,
        ...globals.mocha,
      },
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      sourceType: "module",
    },
    plugins: {
      "react": eslintPluginReact,
      "sort-keys-fix": eslintPluginSortKeysFix,
    },
    rules: {
      "constructor-super": "warn",
      "eqeqeq": ["error", "always", { null: "ignore" }],
      "no-const-assign": "warn",
      "no-this-before-super": "warn",
      "no-unreachable": "warn",
      "no-unused-vars": "warn",
      "react/jsx-sort-props": "warn",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "sort-keys-fix/sort-keys-fix": "warn",
      "valid-typeof": "warn",
    },
  },
];
