import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DataContextProvier from "../src/dataContextStore/DataContextProvider.jsx";
import { BrowserRouter, Routes } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <DataContextProvier>
      <App />
    </DataContextProvier>
    </BrowserRouter>
  </StrictMode>
);
