import { all, call, takeLatest, put } from "redux-saga/effects";
import actions from "./actions";
import { getLoanAmount } from "../../services/PersonalLoanApi";
import { WENT_WRONG_MESSAGE } from "../../constants/commonMessage";
import LoanAmountModel from "../../models/loanAmout";
function* loanAmount() {
  try {
    const response = yield call(getLoanAmount);
    const { status, data } = response;
    switch (status) {
      case 200:
        const DataModel = (data || []).map(item => new LoanAmountModel(item));
        yield put(actions.loanAmountSuccess(DataModel));
        break;
      default: {
        yield put(actions.loanAmountError({ errMessage: WENT_WRONG_MESSAGE }));
      }
    }
  } catch (error) {
    yield put(
      actions.loanAmountError({
        errMessage: error.message || WENT_WRONG_MESSAGE
      })
    );
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.GET_LAON_AMOUNT_START, loanAmount)]);
}
