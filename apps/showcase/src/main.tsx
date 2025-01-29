import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "styles/reset.css";
import "./normalize.css";
import "@ethanheo/styles/light.theme.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
