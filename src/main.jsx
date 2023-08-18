import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MainContext from "./MainContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MainContext>
  </React.StrictMode>
);
