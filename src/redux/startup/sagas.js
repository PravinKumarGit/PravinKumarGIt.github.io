import { all, call, takeLatest, put } from "redux-saga/effects";
import actions from "./actions";
import { getLoanAmount } from "../../services/PersonalLoanApi";

function* loanAmount() {
  try {
    const response = yield call(getLoanAmount);
    console.log(response, "Response");
    yield put(actions.loanAmountSuccess(response));
  } catch (error) {
    console.log(error);
    yield put(actions.loanAmountError(error));
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.GET_LAON_AMOUNT_START, loanAmount)]);
}
