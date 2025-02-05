import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import normalize from "./styles/normalize.global.ts";
import { Global } from "@emotion/react";
import App from "./App.tsx";
import "styles/reset.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global styles={normalize} />
    <App />
  </StrictMode>,
);
