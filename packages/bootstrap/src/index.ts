#!/usr/bin/env node

import type { ViteTemplate } from "./createProject";
import { program } from "commander";
import createProject from "./createProject";
import createViteConfig from "./createViteConfig";
import addPackages from "./addPackages";

// 1. 옵션 설정

interface Options {
  template: ViteTemplate;
  path: string;
}
const VITE_TEMPLATE: ViteTemplate[] = [
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

program
  .name("bootstrap")
  .description(
    "Vite 기반 부트스트랩을 생성하고 빌드 설정을 자동화하기 위한 도구",
  )
  .version("1.0.0");

program
  .option(
    "-T, --template <type>",
    `Vite 템플릿 옵션 [${VITE_TEMPLATE.join(", ")}]`,
  )
  .option("-P, --path <string>", "생성 경로")
  .parse(process.argv);

const generate = async (options: Options) => {
  createProject(options.template, options.path);
  await createViteConfig(options.path);
  await addPackages(options.path);
};

generate(program.opts<Options>());
