import React from "react";
import ReactDOM from "react-dom";
import GobalThemeProvider from "./provider/themes.js";

import "./index.css";
import App from "./App";
import StateProvider from "./provider/state.js";

ReactDOM.render(
  <StateProvider>
    <GobalThemeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GobalThemeProvider>
  </StateProvider>,
  document.getElementById("root")
);
