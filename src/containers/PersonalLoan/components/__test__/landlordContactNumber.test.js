import React from "react";
import { render } from 'react-test-utils'

import {expectThat} from "../../../../utils/testModules/jest-test-utils";
import {useOptionalStateManager} from "../../../../hooks/useOptionalStateManager";
import LandlordContactNumber from "../landlordContactNumber";

jest.mock("../../../../hooks/useOptionalStateManager");

describe("<LandlordContactNumber>", () => {
  beforeEach(() => {
    useOptionalStateManager.mockReset();
  });

  it.each`
    residentialStatus
    ${"Renting"}
    ${"Caravan"}
    ${"Other"}
    ${"Boarding (with friends/family/relatives)"}
  `("should render landlord input", ({residentialStatus}) => {
    const result = render(<LandlordContactNumber values={{residentialStatus}} />);

    expect(getLandlordInput(result)).toBeTruthy();
  });
  
  it("should render a help tooltip", () => {
    const willCauseDisplay = "Renting";
    const { getByText } = render(<LandlordContactNumber values={{residentialStatus: willCauseDisplay}} />);

    expect(
      getByText(
        `Please provide a contact number for the person you live with or rent from, who can verify your current address`
      )
    ).toBeTruthy();
  });

  it("should not render for non Renting, Caravan, Other OR Boarding", () => {
    const result = render(<LandlordContactNumber values={{residentialStatus: 'nope'}} />);

    expect(getLandlordInput(result)).toBeFalsy();
  });

  it('Should call into useOptionalStateManager with expectedArgs', () => {
    render(<LandlordContactNumber values={{}} />);

    expectThat(useOptionalStateManager).received(false, "");
  });

  it('Should pass name and value into setFieldValue when setValue Called', () => {
    const expectedValue = "expectedValue";
    const expectedName = "expectedName";
    const setFieldValue = jest.fn();
    useOptionalStateManager.mockImplementation((a, b, callback) => callback(expectedValue));

    render(<LandlordContactNumber values={{}} name={expectedName} setFieldValue={setFieldValue} />);

    expectThat(setFieldValue).received(expectedName, expectedValue);
  })
});

const getLandlordInput = ({queryAllByText}) => {
  return queryAllByText("Landlord contact number").length;
};