import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router";
import "antd/dist/antd.css";
import store from "./store";
import { Provider } from "react-redux";
import { worker } from "./mocks/browser";

if (process.env.NODE_ENV === "development") {
  void worker.start({
    serviceWorker: {
      url: "/mockServiceWorker.js",
      options: {
        // Narrow the scope of the Service Worker to intercept requests
        // only from pages under this path.
        scope: "/api",
      },
    },
    quiet: true,
  });
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
