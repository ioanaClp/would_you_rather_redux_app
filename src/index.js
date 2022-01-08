import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createStore, compose } from "redux";
import reducer from "./reducers";
import middleware from "./middleware";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

// Midleware for having the redux chrome debug feature
const reduxChromeDebugMidleware =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//Create the redux store
const store = createStore(
  reducer,
  compose(middleware, reduxChromeDebugMidleware)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
