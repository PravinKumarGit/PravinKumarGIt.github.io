import { queryStringToLoanObjectMapper } from "../queryStringToLoanObjectMapper";

describe("extractQueryStringValues", () => {
  it.each`
      queryStringKey      | formKey        
      ${'reasonforloan'}  | ${'loanReason'}
      ${'reasonForLoan'}  | ${'loanReason'}
      ${'email'}          | ${'emailAddress'}
      ${'firstName'}      | ${'firstName'}
      ${'firstname'}      | ${'firstName'}
      ${'lastName'}       | ${'lastName'}
      ${'loanAmount'}     | ${'loanAmount'}
      ${'mobileNumber'}   | ${'mobilePhone'}
    `("should prefill $queryStringKey into $formKey", ({queryStringKey, formKey}) => {
    const expected= "expected";

    const result = runExtractQueryStringValues({[queryStringKey]: expected});

    expect(result[formKey]).toBe(expected);
  });

  const runExtractQueryStringValues = (queryStringKeyValuePairDictionary) => 
    queryStringToLoanObjectMapper(queryStringKeyValuePairDictionary);
});