"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const prettier_1 = __importDefault(require("prettier"));
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
const createViteConfig = async (path) => {
    node_fs_1.default.writeFileSync(`${path}/vite.config.ts`, await prettier_1.default.format(content, { parser: "typescript" }), "utf-8");
};
exports.default = createViteConfig;
