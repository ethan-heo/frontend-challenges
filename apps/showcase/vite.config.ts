import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import moveDistFiles from "vite-plugin-move-dist-files";
import path from "node:path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  base: "/frontend-challenges/",
  plugins: [
    react(),
    svgr(),
    moveDistFiles({
      distPath: path.resolve(__dirname, "dist"),
      targetPath: path.resolve(__dirname, "../../docs"),
    }),
  ],
});
