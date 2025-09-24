import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import AppProvider from "./Context/appContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <App />
      <ToastContainer position="top-center" />
    </AppProvider>


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />

  </StrictMode>
);
