import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router";
import "antd/dist/antd.css";
import store from "./store";
import { Provider } from "react-redux";
import { worker } from "./mocks/browser";

if (process.env.NODE_ENV === "development") {
  void worker.start();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
