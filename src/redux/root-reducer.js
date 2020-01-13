import { combineReducers } from "redux";
import App from "./app/reducer";
import ThemeSwitcher from "./themeSwitcher/reducer";
import StartUp from "./startup/reducer";

export default combineReducers({
  App,
  ThemeSwitcher,
  StartUp
});
