import React from "react";
import ReactDOM from "react-dom/client";
import "./css/defaultCss/index.css";
import MainApp from "./MainApp";

import {} from "react-router-dom";

import setupLocatorUI from "@locator/runtime";

if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
