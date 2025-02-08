import { useLayoutEffect, useState } from "react";
// 프로젝트에서 재정의 가능하도록 만들 필요

export interface DefaultMediaQuery {
  [key: string]: any;
}

type MediaQuery = string;

const mediaQueryMap = new Map();

/**
 *
 * @param platform
 * @param mediaQuery
 *
 * @example
 * registerMediaQuery('mobile', '(max-width: 480px)')
 */
export const registerMediaQuery = (
  platform: DefaultMediaQuery["platform"],
  mediaQuery: MediaQuery,
) => {
  mediaQueryMap.set(platform, mediaQuery);
};

export const getMediaQuery = (platform: DefaultMediaQuery["platform"]) => {
  return mediaQueryMap.get(platform);
};

const useMediaQuery = (styleMap: DefaultMediaQuery["args"] = {}) => {
  const [style, setStyle] = useState<unknown>();

  useLayoutEffect(() => {
    const styles = Object.entries(styleMap);

    if (styles.length === 0) {
      return;
    }

    const handlers: MatchMediaHandler[] = [];

    for (const [platform, style] of styles) {
      const mediaQuery = mediaQueryMap.get(platform);

      if (!mediaQuery) {
        throw new Error(`Not defined media query: ${platform}`);
      }

      handlers.push(
        new MatchMediaHandler(mediaQuery, (matches) => {
          if (matches) {
            setStyle(style);
          }
        }),
      );
    }

    handlers.forEach((handler) => {
      handler.init();
    });

    return () => {
      handlers.forEach((handler) => {
        handler.clear();
      });
    };
  }, []);

  return style as DefaultMediaQuery["returnType"];
};

export default useMediaQuery;

class MatchMediaHandler {
  #matchMedia: MediaQueryList;
  #callback: (ev: MediaQueryListEvent) => void;
  #changeCallback: (matches: boolean) => void;
  constructor(mediaQuery: string, changeCallback: (matches: boolean) => void) {
    this.#callback = (ev: MediaQueryListEvent) => {
      changeCallback(ev.matches);
    };
    this.#changeCallback = changeCallback;
    this.#matchMedia = window.matchMedia(mediaQuery);
    this.#matchMedia.addEventListener("change", this.#callback);
  }

  init() {
    this.#changeCallback(this.#matchMedia.matches);
  }

  clear() {
    this.#matchMedia.removeEventListener("change", this.#callback);
  }
}
