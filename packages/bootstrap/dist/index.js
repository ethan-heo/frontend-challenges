#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const createProject_1 = __importDefault(require("./createProject"));
const createViteConfig_1 = __importDefault(require("./createViteConfig"));
const addPackages_1 = __importDefault(require("./addPackages"));
const VITE_TEMPLATE = [
    "vanilla",
    "vanilla-ts",
    "vue",
    "vue-ts",
    "react",
    "react-ts",
    "react-swc",
    "react-swc-ts",
    "preact",
    "preact-ts",
    "lit",
    "lit-ts",
    "svelte",
    "svelte-ts",
    "solid",
    "solid-ts",
    "qwik",
    "qwik-ts",
];
commander_1.program
    .name("bootstrap")
    .description("Vite 기반 부트스트랩을 생성하고 빌드 설정을 자동화하기 위한 도구")
    .version("1.0.0");
commander_1.program
    .option("-T, --template <type>", `Vite 템플릿 옵션 [${VITE_TEMPLATE.join(", ")}]`)
    .option("-P, --path <string>", "생성 경로")
    .parse(process.argv);
const generate = async (options) => {
    (0, createProject_1.default)(options.template, options.path);
    await (0, createViteConfig_1.default)(options.path);
    await (0, addPackages_1.default)(options.path);
};
generate(commander_1.program.opts());
