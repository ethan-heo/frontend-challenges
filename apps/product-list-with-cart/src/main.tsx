import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import normalize from "./styles/normalize.global.ts";
import { Global } from "@emotion/react";
import App from "./App.tsx";
import "styles/reset.css";
import { registerMediaQuery } from "use-media-query";

registerMediaQuery("mobile", "(max-width: 480px)");
registerMediaQuery("tablet", "(min-width: 481px) and (max-width: 1024px)");
registerMediaQuery("desktop", "(min-width: 1025px)");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global styles={normalize} />
    <App />
  </StrictMode>,
);
