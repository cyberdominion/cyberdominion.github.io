import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Changed from BrowserRouter
import App from "./App"; 

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <HashRouter> {/* Changed from BrowserRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);