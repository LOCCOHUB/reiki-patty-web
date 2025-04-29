import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root");
if (!root) throw new Error("Failed to find root element");

createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);