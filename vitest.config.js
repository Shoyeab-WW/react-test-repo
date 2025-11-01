/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: "./src/setupTests.js",
    coverage: {
      include: ["src/**/*.{ts,tsx,js,jsx}"], 
      exclude:["src/main.jsx"], 
      provider: "v8",
      reporter: ["text", "json", "html"],
      lines: 75,
      functions: 75,
      branches: 75,
      statements: 75,
    },
  },
});
