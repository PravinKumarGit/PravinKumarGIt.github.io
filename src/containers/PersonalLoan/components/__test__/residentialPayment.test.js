import React from "react";
import { render } from 'react-test-utils'

import {expectThat} from "../../../../utils/testModules/jest-test-utils";
import {useOptionalStateManager} from "../../../../hooks/useOptionalStateManager";
import ResidentialPayment from "../ResidentialPayment";

jest.mock("../../../../hooks/useOptionalStateManager");

describe("<ResidentialPayment>", () => {
  beforeEach(() => {
    useOptionalStateManager.mockReset();
  });

  it.each`
    residentialStatus                             | residentialStatusShort
    ${"Renting"}                                  | ${"rent"}
    ${"Mortgage"}                                 | ${"mortgage"}
    ${"Boarding (with friends/family/relatives)"} | ${"board"}
  `("should render a label with the expected output for $residentialStatus", ({residentialStatus, residentialStatusShort}) => {
    const { getByText } = render(<ResidentialPayment values={{
      residentialStatus,
      residentialPaymentFrequency: "Weekly"
    }} />);

    expect(getByText(`Your share of the ${residentialStatusShort}, weekly`)).toBeTruthy();
  });

  it.each`
    residentialStatus                             | residentialStatusShort
    ${"Renting"}                                  | ${"rent"}
    ${"Mortgage"}                                 | ${"mortgage"}
    ${"Boarding (with friends/family/relatives)"} | ${"board"}
  `("should render a help tooltip with the expected output for $residentialStatus", ({residentialStatus, residentialStatusShort}) => {
    const { getByText } = render(<ResidentialPayment values={{
      residentialStatus
    }} />);

    expect(getByText(`Enter YOUR share of the ${residentialStatusShort}, only what YOU pay`)).toBeTruthy();
  });

  it("should not render for non Renting, Mortgage OR Boarding", () => {
    const result = render(<ResidentialPayment values={{residentialStatus: "nope"}} />);

    expect(getPaymentInput(result)).toBeFalsy();
  });

  it('Should call into useOptionalStateManager with expectedArgs', () => {
    render(<ResidentialPayment values={{}} />);

    expectThat(useOptionalStateManager).received(false, "");
  });

  it('Should pass name and value into setFieldValue when setValue Called', () => {
    const expectedValue = "expectedValue";
    const expectedName = "expectedName";
    const setFieldValue = jest.fn();
    useOptionalStateManager.mockImplementation((a, b, callback) => callback(expectedValue));

    render(<ResidentialPayment values={{}} name={expectedName} setFieldValue={setFieldValue} />);

    expectThat(setFieldValue).received(expectedName, expectedValue);
  })
});

const getPaymentInput = ({queryAllByText, residentialStatus = "foo", residentialPaymentFrequency = "bar"}) => {
  return queryAllByText(`Your share of the ${residentialStatus}, ${residentialPaymentFrequency}`, { exact: false }).length;
};