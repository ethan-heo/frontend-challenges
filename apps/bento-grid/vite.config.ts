import { defineConfig } from "vite";
import path from "node:path";
import moveDistFiles from "vite-plugin-move-dist-files";
import pkg from "./package.json";

export default defineConfig({
  base: `/frontend-challenges/projects/${pkg.challenge.name}/`,
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
