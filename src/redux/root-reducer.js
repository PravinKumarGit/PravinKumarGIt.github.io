import { combineReducers } from "redux";
import App from "./app/reducer";
import ThemeSwitcher from "./themeSwitcher/reducer";

export default combineReducers({
  App,
  ThemeSwitcher
});
