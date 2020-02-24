import environmentSettings from "../constants/environmentSettings";

export default {
  BASE_URL: "",
  LOAN_AMOUNT: environmentSettings.getPricingAPi,
  POST_LOAN_FORM: environmentSettings.submitApplicationApi
};
