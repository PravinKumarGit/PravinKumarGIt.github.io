import { all, call, takeLatest, put } from "redux-saga/effects";
import actions from "./actions";
import { postLoanForm } from "../../services/PersonalLoanApi";
import { WENT_WRONG_MESSAGE } from "../../constants/commonMessage";
import { LoanFormPost } from "../../models/loanForm";
function* loanForm(action) {
  const { payload } = action;
  const { step } = payload;
  const loanFormPost = new LoanFormPost(action.payload);
  try {
    const response = yield call(postLoanForm, loanFormPost);
    const { status, data } = response;
    switch (status) {
      case 200:
        yield put(actions.postLoanFormSuccess(data));
        yield put(actions.incrementStep());
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
