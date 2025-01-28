import { defineConfig } from "vite";
import moveDistFiles from "vite-plugin-move-dist-files";
import path from "node:path";
import pkg from "./package.json";

export default defineConfig({
  base: `/frontend-challenges/projects/${pkg.challenge.name}/`,
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        ticket: path.resolve(__dirname, "ticket.html"),
      },
      output: {
        manualChunks: {
          reset: ["./src/styles/reset.css"],
          normalize: ["./src/styles/normalize.css"],
        },
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
