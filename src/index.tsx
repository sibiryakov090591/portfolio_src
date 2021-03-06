import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./themes";
import { ThemeProvider } from "@material-ui/core";
import { I18nProvider } from "./services/I18next";

window.addEventListener("load", () => {
  ReactDOM.render(
    <React.StrictMode>
      <I18nProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </I18nProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
