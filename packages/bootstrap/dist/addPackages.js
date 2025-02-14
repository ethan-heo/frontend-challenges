"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const prettier_1 = __importDefault(require("prettier"));
const addPackages = async (path) => {
    const PKG_PATH = `${path}/package.json`;
    const content = node_fs_1.default.readFileSync(PKG_PATH, {
        encoding: "utf-8",
    });
    const pkg = JSON.parse(content);
    pkg.devDependencies["vite-plugin-move-dist-files"] = "workspace:*";
    pkg["challenge"] = {
        name: pkg.name,
        description: "",
        source: "",
        sourceLink: "",
        skills: [],
    };
    node_fs_1.default.writeFileSync(PKG_PATH, await prettier_1.default.format(JSON.stringify(pkg), { parser: "json" }), { encoding: "utf-8" });
};
exports.default = addPackages;
