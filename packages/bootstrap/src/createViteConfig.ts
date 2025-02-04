import fs from "node:fs";
import prettier from "prettier";

const content = `
    import { defineConfig } from "vite";
    import moveDistFiles from "vite-plugin-move-dist-files";
    import path from "node:path";
    import pkg from "./package.json";

    export default defineConfig({
    base: \`/frontend-challenges/projects/\${pkg.challenge.name}/\`,
    plugins: [
        moveDistFiles({
        distPath: path.resolve(__dirname, "dist"),
        targetPath: path.resolve(
            __dirname,
            \`../../docs/projects/\${pkg.challenge.name}\`
        ),
        }),
    ],
    });
`;

const createViteConfig = async (path: string) => {
  fs.writeFileSync(
    `${path}/vite.config.ts`,
    await prettier.format(content, { parser: "typescript" }),
    "utf-8",
  );
};

export default createViteConfig;
