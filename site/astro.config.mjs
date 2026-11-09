// VEON demo base: technical setup only. Visual design comes from design/concept.md of each client.
import { defineConfig } from "astro/config";

// DEMO_BASE: sub-path for GitHub Pages (e.g. /veon-demo-doctor-armstrong/); root by default.
export default defineConfig({
  base: process.env.DEMO_BASE || "/",
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
  devToolbar: { enabled: false },
  // Keep full HEX colours in the built CSS (veon_check.py matches the concept palette literally).
  vite: { build: { cssMinify: false } },
});
