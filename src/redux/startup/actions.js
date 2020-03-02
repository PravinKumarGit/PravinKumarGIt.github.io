import { createPayloadAction, createEmptyAction } from "../utility/actions";
import { parseQueryString as queryStringParser } from "../../services/parseQueryString";

const START_UP = "START_UP";
const GET_LOAN_AMOUNT_START = "GET_LOAN_AMOUNT_START";
const GET_LOAN_AMOUNT_SUCCESS = "GET_LOAN_AMOUNT_SUCCESS";
const GET_LOAN_AMOUNT_ERROR = "GET_LOAN_AMOUNT_ERROR";
const INITIALISE_QUERY_STRING = "INITIALISE_QUERY_STRING";
const FILL_FORM = "FILL_FORM";
const CHANGE_THEME="CHANGE_THEME";
const parseQueryString = () => {
  return {
    type: INITIALISE_QUERY_STRING,
    payload: queryStringParser(window.location.href)
  };
};

const actions = {
  START_UP,
  GET_LOAN_AMOUNT_START,
  GET_LOAN_AMOUNT_SUCCESS,
  GET_LOAN_AMOUNT_ERROR,
  INITIALISE_QUERY_STRING,
  FILL_FORM,
  CHANGE_THEME,
  startUp: createPayloadAction(START_UP),
  loanAmountRequest: createEmptyAction(GET_LOAN_AMOUNT_START),
  loanAmountSuccess: createPayloadAction(GET_LOAN_AMOUNT_SUCCESS),
  loanAmountError: createPayloadAction(GET_LOAN_AMOUNT_ERROR),
  parseQueryString: parseQueryString,
  fillForm: createEmptyAction(FILL_FORM),
  changeTheme: createPayloadAction(CHANGE_THEME),
};

export default actions;
