import {put} from "redux-saga/effects";
import loanFormAction from '../actions';
import { __TEST__ } from '../sagas';

const { prefillForm } = __TEST__;

describe("loanForm.sagas", () => {
  describe("prefillForm", () => {
    it("should return a done generator when no id nor pre-fill in query string", () => {
      const payload = {};

      const generator = runPrefillForm(payload);

      expectGeneratorDone(generator);
    });
    
    it("should put the PREFILL_USING_QS action when we have a query string and no ID then done", () => {
      const payload = {some: "qs"};

      const generator = runPrefillForm(payload);
      
      expect(generator.next().value).toStrictEqual(put(loanFormAction.prefillUsingQueryString(payload)));
      expectGeneratorDone(generator);
    });

    it("should put the PREFIL_HYDRATION_ID action when we have an Id passed in", () => {
      const expected = "expected";
      const payload = {id: expected};
      
      const generator = runPrefillForm(payload);
      
      expect(generator.next().value).toStrictEqual(put(loanFormAction.prefillUsingHydrationId(expected)));
      expectGeneratorDone(generator);
    });

    const runPrefillForm = (payload = {}) => prefillForm({type: "INITIALISE_QUERY_STRING", payload: payload});
  });
});

const expectGeneratorDone = gen => {
  expect(gen.next().done).toBe(true);
};