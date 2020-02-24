import { all, call, takeLatest, put } from "redux-saga/effects";
import actions from "./actions";
import { postLoanForm } from "../../services/PersonalLoanApi";
import { WENT_WRONG_MESSAGE } from "../../constants/commonMessage";
import LoanFormModel from "../../models/loanForm";

function* loanForm(action) {
  const { payload } = action;
  const { step } = payload;
  const loanFormPost = new LoanFormModel(action.payload);
  try {
    const response = yield call(postLoanForm, loanFormPost);
    const { status, data } = response;
    switch (status) {
      case 200:
        yield put(actions.postLoanFormSuccess(data));
        yield put(actions.setStep(step + 1));
        break;
      default: {
        yield put(
          actions.postLoanFormError({ errMessage: WENT_WRONG_MESSAGE })
        );
      }
    }
  } catch (error) {
    yield put(
      actions.postLoanFormError({
        errMessage: error.message || WENT_WRONG_MESSAGE
      })
    );
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.POST_LOAN_FORM_START, loanForm)]);
}
