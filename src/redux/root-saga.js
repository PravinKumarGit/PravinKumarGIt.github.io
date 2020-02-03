/**
 * @description Common Saga combined
 */

import { all } from "redux-saga/effects";
import startUpSagas from "../redux/startup/sagas";
import loanFormSagas from "../redux/loanForm/sagas";

export default function* rootSaga(getState) {
  yield all([startUpSagas(getState), loanFormSagas(getState)]);
}
