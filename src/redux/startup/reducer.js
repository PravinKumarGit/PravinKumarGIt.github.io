import actions from "./actions";

const initState = {
  loanAmountIsFetching: null,
  loanAmountResponse: null,
  loanAmountError: null,
  queryString: {}
};

export default function(state = initState, action) {
  switch (action.type) {
    case actions.GET_LOAN_AMOUNT_START:
      return {
        ...state,
        loanAmountIsFetching: true,
        loanAmountResponse: null,
        loanAmountError: null
      };
    case actions.GET_LOAN_AMOUNT_SUCCESS:
      return {
        ...state,
        loanAmountIsFetching: false,
        loanAmountResponse: action.payload,
        loanAmountError: null
      };
    case actions.GET_LOAN_AMOUNT_ERROR:
      return {
        ...state,
        loanAmountIsFetching: false,
        loanAmountResponse: null,
        loanAmountError: action.payload
      };
    case actions.INITIALISE_QUERY_STRING:
      return {
        ...state,
        queryString: action.payload
      };
    default:
      return state;
  }
}
