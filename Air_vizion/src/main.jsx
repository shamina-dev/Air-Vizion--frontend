import { StrictMode } from "react";
import App from "./App.jsx"
import { createRoot } from "react-dom/client";
import "./index.css";
import "./components/style.css"
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>
);
