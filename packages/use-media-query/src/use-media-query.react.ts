import { useLayoutEffect, useState } from "react";
import type { DefaultMediaQuery } from "./media-query.types";
import { getMediaQuery, MatchMediaHandler } from "./core/index";

const useMediaQuery = (styleMap: DefaultMediaQuery["args"] = {}) => {
  const [style, setStyle] = useState<unknown>();

  useLayoutEffect(() => {
    const styles = Object.entries(styleMap);

    if (styles.length === 0) {
      return;
    }

    const handlers: MatchMediaHandler[] = [];

    for (const [platform, style] of styles) {
      const mediaQuery = getMediaQuery(platform);

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
