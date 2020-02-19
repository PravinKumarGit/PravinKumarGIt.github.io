import actions from "./actions";

const initState = {
  isFetching: null,
  loanFormResponse: null,
  loanFormError: null
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
    default:
      return state;
  }
}
