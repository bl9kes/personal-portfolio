// Import base ESLint rules for JavaScript
import js from "@eslint/js";

// Import browser global variables (e.g., window, document)
import globals from "globals";

// Import React-specific linting rules
import react from "eslint-plugin-react";

// Enforce best practices for React Hooks (e.g., useEffect, useState)
import reactHooks from "eslint-plugin-react-hooks";

// Helps support Fast Refresh (hot reloading) in development (e.g., Vite)
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // Ignore linting the "dist" folder (it's just build output)
  { ignores: ["dist"] },

  {
    // Apply these rules to all .js and .jsx files
    files: ["**/*.{js,jsx}"],

    // Enable modern JavaScript features and JSX
    languageOptions: {
      ecmaVersion: 2020, // Supports ES2020 features
      globals: globals.browser, // Enables browser globals like "window"
      parserOptions: {
        ecmaVersion: "latest", // Allows latest JS features
        ecmaFeatures: { jsx: true }, // Enables JSX support
        sourceType: "module", // Enables use of import/export
      },
    },

    // Tells the React plugin which version of React you're using
    settings: { react: { version: "18.3" } },

    // Registers ESLint plugins to use in this config
    plugins: {
      react, // React-specific lint rules
      "react-hooks": reactHooks, // React Hooks rules
      "react-refresh": reactRefresh, // Vite's Fast Refresh support
    },

    // Linting rules to apply
    rules: {
      // Start with ESLint's recommended JavaScript rules
      ...js.configs.recommended.rules,

      // Add React’s recommended rules
      ...react.configs.recommended.rules,

      // Add additional JSX-specific rules for modern JSX runtime
      ...react.configs["jsx-runtime"].rules,

      // Add recommended rules for using Hooks correctly
      ...reactHooks.configs.recommended.rules,

      // Turn off warning for using target="_blank" without rel="noopener"
      "react/jsx-no-target-blank": "off",

      // Warn if non-components are exported (helps React Fast Refresh work properly)
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];

// This file is a custom ESLint configuration using the new flat config format.
// It sets up linting for JavaScript and React files in the project.
// It helps catch bugs, enforce coding best practices, and keep code consistent.
// It includes support for React, Hooks, and Vite’s Fast Refresh during development.
