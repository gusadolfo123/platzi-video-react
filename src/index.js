import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./routes/app";
import reducer from "./reducers/index";
import initialState from "../initialState2.json";

// creacion del store
const store = createStore(reducer, initialState, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
