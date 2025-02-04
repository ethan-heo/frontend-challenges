// @ts-ignore
import spawn from "cross-spawn";

export type ViteTemplate =
  | "vanilla"
  | "vanilla-ts"
  | "vue"
  | "vue-ts"
  | "react"
  | "react-ts"
  | "react-swc"
  | "react-swc-ts"
  | "preact"
  | "preact-ts"
  | "lit"
  | "lit-ts"
  | "svelte"
  | "svelte-ts"
  | "solid"
  | "solid-ts"
  | "qwik"
  | "qwik-ts";

const createProject = (template: ViteTemplate, path: string) => {
  spawn.sync("pnpm", ["create", "vite", path, "--template", template], {
    stdio: "inherit",
  });
};

export default createProject;
