import React, { Fragment, Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Map as map } from "immutable";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "../components/header";
import Home from "../components/home";
import Videos from "./videos";
import NotFount from "../components/not-found";
import reducer from "../../reducers/index";

const logger_ = ({ getState, dispatch }) => next => action => {
  console.log("este es mi viejo estado", getState().toJS());
  console.log("vamos a enviar está acción", action);
  const value = next(action);
  console.log("este es mi nuevo estado", getState().toJS());
  return value;
};

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/videos" component={Videos} />
            <Redirect from="/v" to="/videos" />
            <Route exact path="/contacto">
              <div>Contacto</div>
            </Route>
            <Route component={NotFount} />
          </Switch>
        </Fragment>
      </Provider>
    );
  }
}
