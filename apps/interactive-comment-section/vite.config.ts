import { defineConfig } from "vite";
import moveDistFiles from "vite-plugin-move-dist-files";
import path from "node:path";
import pkg from "./package.json";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: `/frontend-challenges/projects/${pkg.challenge.name}/`,
  plugins: [
    moveDistFiles({
      distPath: path.resolve(__dirname, "dist"),
      targetPath: path.resolve(
        __dirname,
        `../../docs/projects/${pkg.challenge.name}`,
      ),
    }),
    svgr(),
  ],
});
