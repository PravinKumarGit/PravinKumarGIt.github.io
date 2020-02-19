import { createGenericAction } from "../utility/actions";

const POST_LOAN_FORM_START = "POST_LOAN_FORM_START";
const POST_LOAN_FORM_SUCCESS = "POST_LOAN_FORM_SUCCESS";
const POST_LOAN_FORM_ERROR = "POST_LOAN_FORM_ERROR";
const LOAN_FORM_COMPLETE_PAGE = "LOAN_FORM_COMPLETE_PAGE";

const actions = {
  POST_LOAN_FORM_START,
  POST_LOAN_FORM_SUCCESS,
  POST_LOAN_FORM_ERROR,
  LOAN_FORM_COMPLETE_PAGE,
  postLoanFormRequest: createGenericAction(POST_LOAN_FORM_START),
  postLoanFormSuccess: createGenericAction(POST_LOAN_FORM_SUCCESS),
  postLoanFormError: createGenericAction(POST_LOAN_FORM_ERROR),
  loanFormCompletePage: createGenericAction(LOAN_FORM_COMPLETE_PAGE)
};

export default actions;
