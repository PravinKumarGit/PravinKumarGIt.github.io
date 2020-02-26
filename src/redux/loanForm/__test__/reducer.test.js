import reducer, { __TEST__ } from "../reducer";
import LoanFormModel from "../../../models/loanForm";

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
    
    it("should set all properties passed in", () => {
      const expectedLoanAmount = "foobar";
      const payload = {loanAmount: expectedLoanAmount};
      const expected = new LoanFormModel({
        values: payload,
        step: 1
      });

      const state = runPrefillUsingQuerystring({payload});

      // ensures that we ran the new LoanFormModel constructor
      expect(state.initialValue).toStrictEqual(expected);
      // ensures that our property was actually set
      expect(state.initialValue.loanAmount).toBe(expectedLoanAmount); 
    });

    const runPrefillUsingQuerystring = ({initState = {initialValue: {}}, payload = {}} = {}) => {
      return reducer(initState, {type: "PREFILL_USING_PAYLOAD", payload});
    };
  });
});