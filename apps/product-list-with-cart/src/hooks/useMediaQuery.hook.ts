import { SerializedStyles } from "@emotion/react";
import { useLayoutEffect, useState } from "react";

interface StyleMap {
  mobile?: SerializedStyles;
  tablet?: SerializedStyles;
  desktop?: SerializedStyles;
}

const useMediaQueryWithEmotion = (styleMap: StyleMap = {}) => {
  const [style, setStyle] = useState<SerializedStyles>();

  useLayoutEffect(() => {
    const styles = Object.entries(styleMap);

    if (styles.length === 0) {
      return;
    }

    const MEDIA_QUERY: Record<keyof StyleMap, string> = {
      mobile: `(max-width: 480px)`,
      tablet: `(min-width: 481px) and (max-width: 1024px)`,
      desktop: `(min-width: 1025px)`,
    };
    const handlers: MatchMediaHandler[] = [];

    for (const [platform, style] of styles) {
      handlers.push(
        new MatchMediaHandler(
          MEDIA_QUERY[platform as keyof StyleMap],
          (matches) => {
            if (matches) {
              setStyle(style);
            }
          },
        ),
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

  return style;
};

export default useMediaQueryWithEmotion;

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
