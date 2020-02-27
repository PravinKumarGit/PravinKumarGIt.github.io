import { combineReducers } from "redux";
import StartUp from "./startup/reducer";
import loanForm from "./loanForm/reducer";

export default combineReducers({
  StartUp,
  loanForm
});
