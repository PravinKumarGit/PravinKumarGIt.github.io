import reducer, { __TEST__ } from "../reducer";
import LoanFormModel from "../../../models/loanForm";

const { sanitizeValues } = __TEST__;

describe("loanForm.reducer", () => {
  it("should have an initial state", () => {
    const expectedPropertyCount = 5;

    const state = reducer(undefined, {});

    expect(state).toStrictEqual({
      isFetching: null,
      loanFormResponse: null,
      loanFormError: null,
      initialValue: new LoanFormModel({ values: {}, step: 1 }),
      step: 1
    });

    const propExpectString = length =>  `startup has ${length} properties`;
    const totalPropertiesString = propExpectString(Object.keys(state).length);
    expect(totalPropertiesString).toBe(propExpectString(expectedPropertyCount))
  });
  
  describe("PREFILL_USING_QUERYSTRING", () => {
    it("should return a different object", () => {
      const initState = {unique: "butterfly"};

      const state = runPrefillUsingQuerystring({initState});

      expect(state).not.toBe(initState);
    });

    it("should not edit the existing state", () => {
      const initState = {foo: "bar"};
      const state = runPrefillUsingQuerystring({initState});

      expect(state).toMatchObject(initState);
    });
    
    it("should change the initialValue reference", () => {
      const initState = {initialValue: {}};
      
      const state = runPrefillUsingQuerystring({initState});
      
      expect(state.initialValue).not.toBe(initState.initialValue);
    });
    
    it.each`
      queryStringKey      | formKey        
      ${'reasonforloan'}  | ${'loanReason'}
      ${'reasonForLoan'}  | ${'loanReason'}
      ${'email'}  | ${'emailAddress'}
      ${'firstName'}  | ${'firstName'}
      ${'firstname'}  | ${'firstName'}
      ${'lastName'}  | ${'lastName'}
      ${'loanAmount'}  | ${'loanAmount'}
      ${'mobileNumber'}  | ${'mobilePhone'}
    `("should prefill $queryStringKey into $formKey", ({queryStringKey, formKey}) => {
      const expected= "expected";
      
      const state = runPrefillUsingQuerystring({payload: {[queryStringKey]: expected}});
      
      expect(state.initialValue[formKey]).toBe(expected);
    });

    const runPrefillUsingQuerystring = ({initState = {initialValue: {}}, payload = {}} = {}) => {
      return reducer(initState, {type: "PREFILL_USING_QUERYSTRING", payload});
    };
  });
  
  describe("sanitizeValues", () => {

    it("should return a new object", () => {
      const originalObject = {};
      
      const result = runSanitizeValues(originalObject);
      
      expect(result).not.toBe(originalObject);
      expect(result).toStrictEqual({});
    });
    
    it("should not modify keys we are not editing", () => {
      const wontChange = {unUsedKeyThatDoesntMatter: "some Value"};
      
      const result = runSanitizeValues(wontChange);
      
      expect(result).toStrictEqual(wontChange);
    });
    
    it.each`
      key             | value         | sanitizedValue
      ${"loanReason"} | ${"BondLoan"} | ${"Bond Loan"}
    `("should map property $key's value of $value to $sanitizedValue", ({key, value, sanitizedValue}) => {
      const result = runSanitizeValues({[key]: value});
      
      expect(result).toStrictEqual({[key]: sanitizedValue});
    });
    
    const runSanitizeValues = (formKeyValues = {}) => {
      return sanitizeValues(formKeyValues);
    };
  });
});