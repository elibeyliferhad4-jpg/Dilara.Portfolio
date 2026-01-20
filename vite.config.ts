import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { writeFileSync } from "fs";

export default defineConfig({
  // Base path for GitHub Pages (root)
  base: "/",

  plugins: [
    react(),

    // Writes .nojekyll + CNAME into /docs automatically
    {
      name: "pages-meta",
      writeBundle() {
        const outDir = "docs";

        // Prevent Jekyll processing
        writeFileSync(resolve(outDir, ".nojekyll"), "");

        // Custom domain (your domain)
        writeFileSync(resolve(outDir, "CNAME"), "farhadalibayli.site\n");
      },
    },
  ],

  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "esnext",
    outDir: "docs",
    assetsDir: "assets",
  },

  server: {
    port: 3000,
    open: true,
  },
});
