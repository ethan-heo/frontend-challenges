import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json";
import path from "node:path";
import fs from "node:fs";

// https://vite.dev/config/
export default defineConfig({
  base: `/frontend-challenges/projects/${pkg.name}/`,
  plugins: [
    react({}),
    {
      name: "move-dist-files",
      closeBundle: () => {
        const sourceDir = path.resolve(__dirname, "dist");
        const targetDir = path.resolve(
          __dirname,
          `../../docs/projects/${pkg.name}`
        ); // 이동할 경로

        // 디렉토리 생성
        fs.mkdirSync(targetDir, { recursive: true });

        // dist 내 모든 파일/폴더 이동
        const files = fs.readdirSync(sourceDir);
        for (const file of files) {
          const srcPath = path.join(sourceDir, file);
          const destPath = path.join(targetDir, file);
          fs.renameSync(srcPath, destPath); // 파일 이동
        }

        console.log("Files moved to:", targetDir);
      },
    },
  ],
});
