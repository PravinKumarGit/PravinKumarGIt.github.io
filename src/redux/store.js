import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { createRootReducer } from "./root-reducer";
import rootSaga from "./root-saga";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(
  createRootReducer(history),
  bindMiddleware(middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;
