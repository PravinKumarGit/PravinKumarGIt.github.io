import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import StartUp from "./startup/reducer";
import loanForm from "./loanForm/reducer";

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  StartUp,
  loanForm
});
