import React from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";
import "./CSS/Iconos.css";
import App from "./App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import reducers from "./Reducers";

//convocando el store se realiza el llamado al almacenamiento global de informacion de REDUX
const store = createStore(
  reducers, //todos los reducers
  {}, //estado inicial
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
