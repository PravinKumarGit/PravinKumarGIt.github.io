/**
 * @description Common Saga combined
 */

import { all } from "redux-saga/effects";
import startUpSagas from "../redux/startup/sagas";

export default function* rootSaga(getState) {
  yield all([startUpSagas()]);
}
