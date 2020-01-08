import { store } from "./store";
import actions from "../redux/startup/actions";

export default payload =>
  new Promise(() => {
    store.dispatch(actions.startUp(payload));
  });
