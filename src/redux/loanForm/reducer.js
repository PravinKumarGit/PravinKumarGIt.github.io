import actions from "./actions";

const initState = {
  isFetching: null,
  loanFormResponse: null,
  loanFormError: null,
  step: 1
};

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
      const totalSteps = 4;
      const nextStep = Math.min(state.step + 1, totalSteps);
      return {
        ...state,
        step: nextStep
      };
    case actions.SET_STEP:
      return {
        ...state,
        step: action.payload
      };
    default:
      return state;
  }
}
