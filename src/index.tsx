import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

import Router from "./Router";

const reduxState = localStorage.getItem("reduxState");
const persistedState = reduxState ? JSON.parse(reduxState) : {};
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
