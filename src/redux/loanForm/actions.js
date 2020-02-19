import { createPayloadAction, createEmptyAction } from "../utility/actions";

const POST_LOAN_FORM_START = "POST_LOAN_FORM_START";
const POST_LOAN_FORM_SUCCESS = "POST_LOAN_FORM_SUCCESS";
const POST_LOAN_FORM_ERROR = "POST_LOAN_FORM_ERROR";
const INCREMENT_STEP = "INCREMENT_STEP";
const SET_STEP = "SET_STEP";

const actions = {
  POST_LOAN_FORM_START,
  POST_LOAN_FORM_SUCCESS,
  POST_LOAN_FORM_ERROR,
  INCREMENT_STEP,
  SET_STEP,
  postLoanFormRequest: createPayloadAction(POST_LOAN_FORM_START),
  postLoanFormSuccess: createPayloadAction(POST_LOAN_FORM_SUCCESS),
  postLoanFormError: createPayloadAction(POST_LOAN_FORM_ERROR),
  incrementStep: createEmptyAction(INCREMENT_STEP),
  setStep: createPayloadAction(SET_STEP)
};

export default actions;
