import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FontStyles from "./fontStyles";
import GlobalStyle from "./global-style";

import "normalize.css/normalize.css"
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FontStyles />
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
