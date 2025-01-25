import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import moveDistFiles from "vite-plugin-move-dist-files";
import path from "node:path";

console.log(moveDistFiles);

// https://vite.dev/config/
export default defineConfig({
  base: "/frontend-challenges/",
  plugins: [
    react(),
    moveDistFiles({
      distPath: path.resolve(__dirname, "dist"),
      targetPath: path.resolve(__dirname, "../../docs"),
    }),
  ],
});
