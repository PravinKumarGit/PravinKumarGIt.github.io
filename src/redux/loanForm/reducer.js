import actions from "./actions";
import LoanFormModel from "../../models/loanForm";

const initialStep = 1;
const initState = {
  isFetching: null,
  loanFormResponse: null,
  loanFormError: null,
  initialValue: new LoanFormModel({ values: {}, step: initialStep }),
  step: initialStep
};

function constrainStep(stepToSet) {
  const totalSteps = 4;
  return Math.min(stepToSet, totalSteps);
}

function getCurrentLoanState(state) {
  return state.loanFormResponse ? state.loanFormResponse.value : {};
}

export default function(state = initState, action) {
  switch (action.type) {
    case actions.POST_LOAN_FORM_START:
      return {
        ...state,
        isFetching: true,
        loanFormResponse: null,
        loanFormError: null
      };
    case actions.POST_LOAN_FORM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        loanFormResponse: action.payload,
        loanFormError: null
      };
    case actions.POST_LOAN_FORM_ERROR:
      return {
        ...state,
        isFetching: false,
        loanFormResponse: null,
        loanFormError: action.payload
      };
    case actions.SET_STEP:
      return {
        ...state,
        step: constrainStep(action.payload),
        initialValue: new LoanFormModel({
          values: getCurrentLoanState(state),
          step: action.payload
        })
      };
    case actions.PREFILL_USING_PAYLOAD: 
      return {
        ...state,
        initialValue: new LoanFormModel({
          values: { ...action.payload },
          step: 1
        })
      };
    default:
      return state;
  }
}