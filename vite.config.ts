import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

export default defineConfig({
  base: "/Dilara.Portfolio/",

  plugins: [
    react(),

    // create .nojekyll in docs after build
    {
      name: "pages-meta",
      writeBundle() {
        const outDir = "docs";
        fs.writeFileSync(path.resolve(outDir, ".nojekyll"), "");
      },
    },
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "esnext",
    outDir: "docs",
    assetsDir: "assets",
    // important for github pages
    emptyOutDir: true,
  },
});
