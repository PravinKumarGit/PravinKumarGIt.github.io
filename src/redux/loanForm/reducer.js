import actions from "./actions";

const initState = Object.assign(
  {},
  {
    isFetching: null,
    loanFormResponse: null,
    loanFormError: null
  }
);

export default function(state = initState, action) {
  switch (action.type) {
    case actions.GET_LAON_AMOUNT_START:
      return {
        ...state,
        isFetching: true,
        loanFormResponse: null,
        loanFormError: null
      };
    case actions.GET_LAON_AMOUNT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        loanFormResponse: action.payload,
        loanFormError: null
      };
    case actions.GET_LAON_AMOUNT_ERROR:
      return {
        ...state,
        isFetching: false,
        loanFormResponse: null,
        loanFormError: action.payload
      };
    default:
      return initState;
  }
}
