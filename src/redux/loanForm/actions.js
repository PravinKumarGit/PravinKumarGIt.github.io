const actions = {
  POST_LOAN_FORM_START: "POST_LOAN_FORM_START",
  POST_LOAN_FORM_SUCCESS: "POST_LOAN_FORM_SUCCESS",
  POST_LOAN_FORM_ERROR: "POST_LOAN_FORM_ERROR",
  postLoanFormRequest: payload => {
    return {
      type: actions.POST_LOAN_FORM_START,
      payload
    };
  },
  postLoanFormSuccess: payload => {
    return {
      type: actions.POST_LOAN_FORM_SUCCESS,
      payload
    };
  },
  postLoanFormError: payload => {
    return {
      type: actions.POST_LOAN_FORM_ERROR,
      payload
    };
  }
};
export default actions;
