import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import { Global } from "@emotion/react";

import { GlobalStyles } from "./styles/globalStyles";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <App />
  </React.StrictMode>
);
