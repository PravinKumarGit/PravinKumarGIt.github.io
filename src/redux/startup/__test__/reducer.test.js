import reducer from '../reducer';

describe("startup.reducer", () => {
  it("should have an initial state", () => {
    const expectedPropertyCount = 4;
    
    const state = reducer(undefined, {});
    
    expect(state).toStrictEqual({
      loanAmountIsFetching: null,
      loanAmountResponse: null,
      loanAmountError: null,
      queryString: {}
    });

    const propExpectString = length =>  `startup has ${length} properties`;
    const totalPropertiesString = propExpectString(Object.keys(state).length);
    expect(totalPropertiesString).toBe(propExpectString(expectedPropertyCount))
  });
  
  describe("INITIALISE_QUERY_STRING", () => {
    it("should return a different object", () => {
      const initState = {unique: "butterfly"};
      
      const state = runInitQueryStringAction({initState});
      
      expect(state).not.toBe(initState);
    });

    it("should not edit the existing state", () => {
      const initState = {foo: "bar"};
      const state = runInitQueryStringAction({initState});

      expect(state).toMatchObject(initState);
    });
    
    it("should set the queryString via the payload", () => {
      const expected = 'expected';
      
      const state = runInitQueryStringAction({payload: expected});

      expect(state).toStrictEqual({queryString: expected})
    });

    const runInitQueryStringAction = ({initState = {}, payload = undefined} = {}) => {
      return reducer(initState, {type: "INITIALISE_QUERY_STRING", payload});
    };
  });
});