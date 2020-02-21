import React from "react";
import { render } from 'react-test-utils'

import LandlordContactName from "../landlordContactName";
import {expectThat} from "../../../../utils/testModules/jest-test-utils";
import {useOptionalStateManager} from "../../../../hooks/useOptionalStateManager";

jest.mock("../../../../hooks/useOptionalStateManager");

describe("landlordContactName", () => {
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
    const result = render(<LandlordContactName values={{residentialStatus}} />);

    expect(getLandlordInput(result)).toBeTruthy();
  });

  it("should render a help tooltip", () => {
    const willCauseDisplay = "Renting";
    const { getByText } = render(<LandlordContactName values={{residentialStatus: willCauseDisplay}} />);

    expect(
      getByText(
        `Providing this now can enable a faster outcome`
      )
    ).toBeTruthy();
  });
  
  it("should not render for non Renting, Caravan, Other OR Boarding", () => {
    const result = render(<LandlordContactName values={{residentialStatus: 'nope'}} />);

    expect(getLandlordInput(result)).toBeFalsy();
  });

  it('Should call into useOptionalStateManager with expectedArgs', () => {
    render(<LandlordContactName values={{}} />);

    expectThat(useOptionalStateManager).received(false, "");
  });

  it('Should pass name and value into setFieldValue when setValue Called', () => {
    const expectedValue = "expectedValue";
    const expectedName = "expectedName";
    const setFieldValue = jest.fn();
    useOptionalStateManager.mockImplementation((a, b, callback) => callback(expectedValue));

    render(<LandlordContactName values={{}} name={expectedName} setFieldValue={setFieldValue} />);

    expectThat(setFieldValue).received(expectedName, expectedValue);
  })
});

const getLandlordInput = ({queryAllByText}) => {
  return queryAllByText("Landlord contact name").length;
};