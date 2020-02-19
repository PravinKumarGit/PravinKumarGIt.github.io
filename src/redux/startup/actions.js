import { createGenericAction } from "../utility/actions";

const START_UP = "START_UP";
const GET_LOAN_AMOUNT_START = "GET_LOAN_AMOUNT_START";
const GET_LOAN_AMOUNT_SUCCESS = "GET_LOAN_AMOUNT_SUCCESS";
const GET_LOAN_AMOUNT_ERROR = "GET_LOAN_AMOUNT_ERROR";

const actions = {
  START_UP,
  GET_LOAN_AMOUNT_START,
  GET_LOAN_AMOUNT_SUCCESS,
  GET_LOAN_AMOUNT_ERROR,
  startUp: createGenericAction(START_UP),
  loanAmountRequest: createGenericAction(GET_LOAN_AMOUNT_START),
  loanAmountSuccess: createGenericAction(GET_LOAN_AMOUNT_SUCCESS),
  loanAmountError: createGenericAction(GET_LOAN_AMOUNT_ERROR)
};

export default actions;
