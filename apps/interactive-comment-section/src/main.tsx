import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { registerMediaQuery } from "use-media-query";
import "styles/reset.css";
import { Global } from "@emotion/react";
import normalize from "./styles/normalize.styles.ts";

registerMediaQuery("mobile", "(max-width: 480px)");
registerMediaQuery("tablet", "(min-width: 481px) and (max-width: 1024px)");
registerMediaQuery("desktop", "(min-width: 1025px)");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global styles={normalize} />
    <App />
  </StrictMode>,
);
