import api from "./api";
import apiRoutes from "./apiRoutes";

export const getLoanAmount = data => api.get(apiRoutes.LOAN_AMOUNT);
export const postLoanForm = payload =>
  api.post(apiRoutes.POST_LOAN_FORM, { ...payload });
