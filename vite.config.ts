// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// 👇 Add the base option — REQUIRED for GitHub Pages
const BASE = "https://www.nvskumar.com/";

// 👇 Custom plugin to write CNAME to dist folder after build
const cnameWriter = () => ({
  name: "cname-writer",
  buildEnd() {
    const cnamePath = path.resolve(__dirname, "dist", "CNAME");
    fs.writeFileSync(cnamePath, "www.nvskumar.com");
    console.log("✅ Wrote CNAME to dist/");
  },
});

export default defineConfig(({ mode }) => ({
  base: BASE, // 👈 Required for GitHub Pages

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
    cnameWriter(), // 👈 CNAME plugin added here
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
