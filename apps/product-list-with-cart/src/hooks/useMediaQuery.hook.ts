import { useLayoutEffect, useState } from "react";

interface Media {
  mediaQuery: string;
  emotion: string;
}

const useMediaQueryWithEmotion = (medias: Media[]) => {
  const [css, setCSS] = useState<string>("");

  useLayoutEffect(() => {
    const mediaQuery = medias.map(
      (media) =>
        new MediaQuery(media.mediaQuery, (matches: boolean) => {
          if (matches) {
            setCSS(media.emotion);
          }
        }),
    );

    mediaQuery.forEach((matchMedia) => {
      matchMedia.init();
    });

    return () => {
      mediaQuery.forEach((matchMedia) => {
        matchMedia.clear();
      });
    };
  }, []);

  return css;
};

export default useMediaQueryWithEmotion;

class MediaQuery {
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
