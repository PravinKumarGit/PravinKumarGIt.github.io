const actions = {
  START_UP: "START_UP",
  GET_LAON_AMOUNT_START: "GET_LAON_AMOUNT_START",
  GET_LAON_AMOUNT_SUCCESS: "GET_LAON_AMOUNT_SUCCESS",
  GET_LAON_AMOUNT_ERROR: "GET_LAON_AMOUNT_ERROR",
  startUp: payload => {
    return {
      type: actions.START_UP,
      payload
    };
  },
  loanAmountRequest: payload => {
    return {
      type: actions.GET_LAON_AMOUNT_START,
      payload
    };
  },
  loanAmountSuccess: payload => {
    return {
      type: actions.GET_LAON_AMOUNT_SUCCESS,
      payload
    };
  },
  loanAmountError: payload => {
    return {
      type: actions.GET_LAON_AMOUNT_ERROR,
      payload
    };
  }
};
export default actions;
