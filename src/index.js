import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./stores/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
