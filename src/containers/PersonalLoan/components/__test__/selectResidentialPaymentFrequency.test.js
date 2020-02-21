import React from "react";
import { render } from "react-test-utils";
import ResidentialPaymentFrequency, {__TEST__} from "../selectResidentialPaymentFrequency";
import {expectThat} from "../../../../utils/testModules/jest-test-utils";
import {useOptionalStateManager} from "../../../../hooks/useOptionalStateManager";

jest.mock("../../../../hooks/useOptionalStateManager");

const getDefaultSelectValue = () => __TEST__.getDefaultSelectValue();
const getShouldShow = (values) => __TEST__.getShouldShow(values);

describe("selectResidentialPaymentFrequency", () => {
  beforeEach(() => {
    useOptionalStateManager.mockReset();
  });
  
  describe("getDefaultSelectValue", () => {
    it("should return the first item's value", () => {
      const result = getDefaultSelectValue();
      
      expect(result).toBe("Weekly");
    });
  });
  
  describe("getShouldShow", () => {
    it.each`
      residentialStatus                             | shouldShow
      ${"Renting"}                                  | ${true}
      ${"Mortgage"}                                 | ${true}
      ${"Boarding (with friends/family/relatives)"} | ${true}
      ${"no"}                                       | ${false}
      ${""}                                       | ${false}
    `("should return true for payment frequency enabled living situations", ({residentialStatus, shouldShow}) => {
      const getLabledResult = (residentialStatus, shouldShow) => ({residentialStatus, shouldShow});
      
      const result = getShouldShow({residentialStatus});
      
      expect(getLabledResult(residentialStatus, result)).toStrictEqual(getLabledResult(residentialStatus, shouldShow));
    });
  });

  const runRender = (residentialStatus = '') => render(<ResidentialPaymentFrequency values={{residentialStatus}}/>);

  describe("<ResidentialPaymentFrequency>", () => {
    it("Should render Select Output when shouldShow", () => {
      const { getByTestId } = runRender("Renting");
      
      expect(getByTestId("select-component")).toBeTruthy();
    });
    
    it("Should not render Select Output when shouldShow is false", () => {
      const { queryAllByTestId } = runRender("Not One");
      
      expect(queryAllByTestId("select-component").length).toBe(0);
    });
    
    it('Should call into useOptionalStateManager with expectedArgs', () => {
      runRender("");
      
      expectThat(useOptionalStateManager).received(false, "Weekly");
    });
    
    it('Should pass name and value into setFieldValue when setValue Called', () => {
      const expectedValue = "expectedValue";
      const expectedName = "expectedName";
      const setFieldValue = jest.fn();
      useOptionalStateManager.mockImplementation((a, b, callback) => callback(expectedValue));

      render(<ResidentialPaymentFrequency values={{}} name={expectedName} setFieldValue={setFieldValue} />);
      
      expectThat(setFieldValue).received(expectedName, expectedValue);
    })
  });
});