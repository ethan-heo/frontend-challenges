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

export default MatchMediaHandler;
