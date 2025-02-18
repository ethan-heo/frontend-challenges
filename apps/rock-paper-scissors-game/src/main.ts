import { mount } from "svelte";
import App from "./App.svelte";
import "styles/reset.css";
import "./styles/normalize.css";
import { registerMediaQuery } from "use-media-query";

registerMediaQuery("mobile", "(max-width: 480px)");
registerMediaQuery("tablet", "(min-width: 481px) and (max-width: 1024px)");
registerMediaQuery("desktop", "(min-width: 1025px)");

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
