import { combineReducers } from "redux";
import App from "./app/reducer";
import ThemeSwitcher from "./themeSwitcher/reducer";
import StartUp from "./startup/reducer";
import loanForm from "./loanForm/reducer";

export default combineReducers({
  App,
  ThemeSwitcher,
  StartUp,
  loanForm
});
