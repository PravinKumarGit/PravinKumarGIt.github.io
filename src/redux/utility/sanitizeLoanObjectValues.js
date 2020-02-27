import { stringIsNotNullOrEmpty } from "../../utils/helpers/stringHelper";


export const sanitizeValues = formKeyValues => {
  const loanReasonKey = "loanReason";
  const incorrectBondLoanValue = "BondLoan";
  const correctBondLoanValue = "Bond Loan";
  
  const loanReasonValue = formKeyValues[loanReasonKey];
  if (stringIsNotNullOrEmpty(loanReasonValue) && loanReasonValue === incorrectBondLoanValue) {
    formKeyValues[loanReasonKey] = correctBondLoanValue;
  }
  return {
    ...formKeyValues
  };
};