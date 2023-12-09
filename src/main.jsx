import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App  from "./App";
import "@fontsource/bungee-spice";
import "@fontsource/montserrat";
import "@fontsource/roboto";
import "@fontsource/playfair-display";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
