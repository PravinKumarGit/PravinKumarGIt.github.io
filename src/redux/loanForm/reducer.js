import actions from "./actions";

const initState = {
  isFetching: null,
  loanFormResponse: null,
  loanFormError: null,
  step: 1
};

function constrainStep(stepToSet) {
  const totalSteps = 4;
  return Math.min(stepToSet, totalSteps);
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
    case actions.INCREMENT_STEP:
      const nextStep = constrainStep(state.step + 1);
      return {
        ...state,
        step: nextStep
      };
    case actions.SET_STEP:
      return {
        ...state,
        step: constrainStep(action.payload)
      };
    default:
      return state;
  }
}
