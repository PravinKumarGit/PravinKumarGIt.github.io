import { createPayloadAction, createEmptyAction } from "../utility/actions";

const START_UP = "START_UP";
const GET_LOAN_AMOUNT_START = "GET_LOAN_AMOUNT_START";
const GET_LOAN_AMOUNT_SUCCESS = "GET_LOAN_AMOUNT_SUCCESS";
const GET_LOAN_AMOUNT_ERROR = "GET_LOAN_AMOUNT_ERROR";
const PARSE_QUERY_STRING = "PARSE_QUERY_STRING";
const FILL_FORM = "FILL_FORM";

const actions = {
  START_UP,
  GET_LOAN_AMOUNT_START,
  GET_LOAN_AMOUNT_SUCCESS,
  GET_LOAN_AMOUNT_ERROR,
  PARSE_QUERY_STRING,
  FILL_FORM,
  startUp: createPayloadAction(START_UP),
  loanAmountRequest: createEmptyAction(GET_LOAN_AMOUNT_START),
  loanAmountSuccess: createPayloadAction(GET_LOAN_AMOUNT_SUCCESS),
  loanAmountError: createPayloadAction(GET_LOAN_AMOUNT_ERROR),
  parseQueryString: createEmptyAction(PARSE_QUERY_STRING),
  fillForm: createEmptyAction(FILL_FORM),
};

export default actions;
