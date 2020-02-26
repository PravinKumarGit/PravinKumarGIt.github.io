import {stringIsNotNullOrEmpty} from "../../utils/helpers/stringHelper";

const reduceValueUsingKeyMapping = payload => (accumulator, keyMapping) => {
  const queryStringValue = payload[keyMapping.queryString];
  if (stringIsNotNullOrEmpty(queryStringValue)) {
    accumulator[keyMapping.loanObject] = queryStringValue;
  }

  return accumulator;
};

const createKeyMapping = (queryString, loanObject) => ({queryString, loanObject: loanObject || queryString});

export const queryStringToLoanObjectMapper = queryStringKeyValuePairDictionary => {
  const keyMappers = [
    createKeyMapping("reasonforloan", "loanReason"),
    createKeyMapping("reasonForLoan", "loanReason"),
    createKeyMapping("email", "emailAddress"),
    createKeyMapping("firstName"),
    createKeyMapping("firstname", "firstName"),
    createKeyMapping("lastName"),
    createKeyMapping("mobileNumber", "mobilePhone"),
    createKeyMapping("loanAmount"),
  ];

  return keyMappers.reduce(reduceValueUsingKeyMapping(queryStringKeyValuePairDictionary), {});
};
