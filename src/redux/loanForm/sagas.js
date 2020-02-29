import { all, call, takeLatest, put } from "redux-saga/effects";
import actions from "./actions";
import startupActions from '../startup/actions';
import { postLoanForm } from "../../services/PersonalLoanApi";
import { WENT_WRONG_MESSAGE } from "../../constants/commonMessage";
import LoanFormModel from "../../models/loanForm";
import { sanitizeValues } from "../utility/sanitizeLoanObjectValues";
import { queryStringToLoanObjectMapper } from "../utility/queryStringToLoanObjectMapper";
import { push } from 'connected-react-router'
import { PUBLIC_ROUTE } from '../../route.constants'

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

        if (data.status === "Declined"){
          yield put(push(PUBLIC_ROUTE.DECLINE))
        } else {
          yield put(actions.setStep(step + 1));
        }

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

function* prefillForm({ payload }) {
  const { id } = payload;
  
  const hasQueryStringItems = Object.keys(payload).length !== 0;
  const hasId = id && id.trim() !== "";

  if (hasQueryStringItems && !hasId) {
    const loanFormObject = sanitizeValues(queryStringToLoanObjectMapper(payload));
    yield put(actions.prefillUsingPayload(loanFormObject));
  }
  else if (hasId) {
    // const { id } = payload;
    yield put(actions.prefillUsingPayload({firstName: "ToDo"}))
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(actions.POST_LOAN_FORM_START, loanForm),
    takeLatest(startupActions.INITIALISE_QUERY_STRING, prefillForm),
  ]);
}

export const __TEST__ = {
  prefillForm
};