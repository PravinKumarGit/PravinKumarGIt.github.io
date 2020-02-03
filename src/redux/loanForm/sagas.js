import { all, call, takeLatest, put } from "redux-saga/effects";
import actions from "./actions";
import { postLoanForm } from "../../services/PersonalLoanApi";
import { WENT_WRONG_MESSAGE } from "../../constants/commonMessage";
import LoanFormModel from "../../models/loanForm";
function* loanForm(action) {
  console.log(action);

  const payLoad = new LoanFormModel(action.payload);
  try {
    const response = yield call(postLoanForm, payLoad);
    const { status, data } = response;
    switch (status) {
      case 200:
        const DataModel = new LoanFormModel(data);
        yield put(actions.postLoanFormSuccess(DataModel));
        break;
      default: {
        yield put(
          actions.postLoanFormError({ errMessage: WENT_WRONG_MESSAGE })
        );
      }
    }
  } catch (error) {
    console.log(error);
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
