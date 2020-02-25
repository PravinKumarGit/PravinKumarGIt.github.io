import environmentSettings from "../constants/environmentSettings";

export default {
  BASE_URL: "",
  LOAN_AMOUNT: `${environmentSettings.pricingBaseUrlApi}/price/prices`,
  POST_LOAN_FORM: environmentSettings.applicationProcessingBaseUrlApi
};
