import React from "react";
import { render } from "react-test-utils";
import ResidentialPaymentFrequency, {__TEST__} from "../selectResidentialPaymentFrequency";

const getDefaultSelectValue = () => __TEST__.getDefaultSelectValue();
const getShouldShow = (values) => __TEST__.getShouldShow(values);

describe("selectResidentialPaymentFrequency", () => {
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
    `("should return true for payment frequency enabled living situations", ({residentialStatus, shouldShow}) => {
      const getLabledResult = (residentialStatus, shouldShow) => ({residentialStatus, shouldShow})
      
      const result = getShouldShow({residentialStatus});
      
      expect(getLabledResult(residentialStatus, result)).toStrictEqual(getLabledResult(residentialStatus, shouldShow));
    });
  });
  
  describe("<ResidentialPaymentFrequency>", () => {
    it("Should render Select Output when shouldShow", () => {
      const { getByTestId } = render(<ResidentialPaymentFrequency values={{residentialStatus: 'Renting'}} />);
      
      expect(getByTestId("select-component")).toBeTruthy();
    });
    
    it("Should not render Select Output when shouldShow is false", () => {
      const { queryAllByTestId } = render(<ResidentialPaymentFrequency values={{residentialStatus: 'not one'}} />);
      
      expect(queryAllByTestId("select-component").length).toBe(0);
    });
  });
});