// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// 👇 Add the base option — REQUIRED for GitHub Pages
const BASE = "https://www.nvskumar.com/";

export default defineConfig(({ mode }) => ({
  base: BASE, // 👈 This is the key fix
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
