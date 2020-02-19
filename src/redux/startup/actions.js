import { createPayloadAction } from "../utility/actions";

const START_UP = "START_UP";
const GET_LOAN_AMOUNT_START = "GET_LOAN_AMOUNT_START";
const GET_LOAN_AMOUNT_SUCCESS = "GET_LOAN_AMOUNT_SUCCESS";
const GET_LOAN_AMOUNT_ERROR = "GET_LOAN_AMOUNT_ERROR";

const actions = {
  START_UP,
  GET_LOAN_AMOUNT_START,
  GET_LOAN_AMOUNT_SUCCESS,
  GET_LOAN_AMOUNT_ERROR,
  startUp: createPayloadAction(START_UP),
  loanAmountRequest: createPayloadAction(GET_LOAN_AMOUNT_START),
  loanAmountSuccess: createPayloadAction(GET_LOAN_AMOUNT_SUCCESS),
  loanAmountError: createPayloadAction(GET_LOAN_AMOUNT_ERROR)
};

export default actions;
