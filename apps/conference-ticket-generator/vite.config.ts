import { defineConfig } from "vite";
import moveDistFiles from "vite-plugin-move-dist-files";
import path from "node:path";
import pkg from "./package.json";

export default defineConfig({
  base: `/frontend-challenges/projects/${pkg.challenge.name}/`,
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        ticket: path.resolve(__dirname, "ticket.html"),
      },
    },
  },
  plugins: [
    moveDistFiles({
      distPath: path.resolve(__dirname, "dist"),
      targetPath: path.resolve(
        __dirname,
        `../../docs/projects/${pkg.challenge.name}`
      ),
    }),
  ],
});
