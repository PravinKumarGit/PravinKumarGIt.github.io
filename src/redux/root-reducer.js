import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import App from "./app/reducer";
import ThemeSwitcher from "./themeSwitcher/reducer";
import StartUp from "./startup/reducer";
import loanForm from "./loanForm/reducer";

export const createRootReducer = (history) => combineReducers({
  App,
  router: connectRouter(history),
  ThemeSwitcher,
  StartUp,
  loanForm
});
