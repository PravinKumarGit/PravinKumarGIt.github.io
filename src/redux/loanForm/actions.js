import { createPayloadAction } from "../utility/actions";

const POST_LOAN_FORM_START = "POST_LOAN_FORM_START";
const POST_LOAN_FORM_SUCCESS = "POST_LOAN_FORM_SUCCESS";
const POST_LOAN_FORM_ERROR = "POST_LOAN_FORM_ERROR";
const SET_STEP = "SET_STEP";
const PREFILL_USING_QUERYSTRING = "PREFILL_USING_QUERYSTRING";
const PREFILL_USING_HYDRATION_ID = "PREFILL_USING_HYDRATION_ID";

const actions = {
  POST_LOAN_FORM_START,
  POST_LOAN_FORM_SUCCESS,
  POST_LOAN_FORM_ERROR,
  SET_STEP,
  postLoanFormRequest: createPayloadAction(POST_LOAN_FORM_START),
  postLoanFormSuccess: createPayloadAction(POST_LOAN_FORM_SUCCESS),
  postLoanFormError: createPayloadAction(POST_LOAN_FORM_ERROR),
  setStep: createPayloadAction(SET_STEP),
  prefillUsingQueryString: createPayloadAction(PREFILL_USING_QUERYSTRING),
  prefillUsingHydrationId: createPayloadAction(PREFILL_USING_HYDRATION_ID),
};

export default actions;
