import { writable, type Writable } from "svelte/store";
import type { DefaultMediaQuery } from "./media-query.types";
import { onDestroy, onMount } from "svelte";
import { getMediaQuery, MatchMediaHandler } from "./core";

function useMediaQuery(styleMap: DefaultMediaQuery["args"] = {}) {
  const style = writable();
  const handlers: MatchMediaHandler[] = [];

  onMount(() => {
    const styles = Object.entries(styleMap);

    if (styles.length === 0) {
      return;
    }

    const handlers: MatchMediaHandler[] = [];

    for (const [platform, value] of styles) {
      const mediaQuery = getMediaQuery(platform);

      if (!mediaQuery) {
        throw new Error(`Not defined media query: ${platform}`);
      }

      handlers.push(
        new MatchMediaHandler(mediaQuery, (matches) => {
          if (matches) {
            style.update(() => value);
          }
        }),
      );
    }

    handlers.forEach((handler) => {
      handler.init();
    });
  });

  onDestroy(() => {
    handlers.forEach((handler) => {
      handler.clear();
    });
  });

  return style as Writable<DefaultMediaQuery["returnType"]>;
}

export default useMediaQuery;
