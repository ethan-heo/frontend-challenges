"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const cross_spawn_1 = __importDefault(require("cross-spawn"));
const createProject = (template, path) => {
    cross_spawn_1.default.sync("pnpm", ["create", "vite", path, "--template", template], {
        stdio: "inherit",
    });
};
exports.default = createProject;
