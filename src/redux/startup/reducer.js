import actions from "./actions";

const initState = Object.assign(
  {},
  {
    loanAmountIsFetching: null,
    loanAmountResponse: null,
    loanAmountError: null
  }
);

export default function(state = initState, action) {
  switch (action.type) {
    case actions.GET_LAON_AMOUNT_START:
      return {
        ...state,
        loanAmountIsFetching: true,
        loanAmountResponse: null,
        loanAmountError: null
      };
    case actions.GET_LAON_AMOUNT_SUCCESS:
      return {
        ...state,
        loanAmountIsFetching: false,
        loanAmountResponse: action.payload,
        loanAmountError: null
      };
    case actions.GET_LAON_AMOUNT_ERROR:
      return {
        ...state,
        loanAmountIsFetching: false,
        loanAmountResponse: null,
        loanAmountError: action.payload
      };
    default:
      return initState;
  }
}
