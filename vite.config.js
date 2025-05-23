// Import the defineConfig helper from Vite
// This helps with editor auto-completion and config validation
import { defineConfig } from "vite";

// Import the React plugin to enable support for JSX, Fast Refresh, etc.
import react from "@vitejs/plugin-react";

// Export the Vite configuration
// https://vitejs.dev/config/ is the official docs reference
export default defineConfig({
  // Register plugins to enhance Vite's functionality
  plugins: [
    react(), // Enables React features like JSX, HMR (Hot Module Replacement), etc.
  ],
});
