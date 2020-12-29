import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./helpers";
import { App } from "./containers/App/App";

const buildTimestam = new Date()
console.log(buildTimestam)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);