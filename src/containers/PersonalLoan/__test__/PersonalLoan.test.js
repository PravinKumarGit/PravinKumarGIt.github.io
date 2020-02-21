import React from "react";
import { render } from "react-test-utils";
import configureMockStore from "redux-mock-store";

import PersonalLoan from "../PersonalLoan";

test("renders learn react link", () => {
  const { getByText } = render(
    <PersonalLoan />
  );
  const linkElement = getByText(/Personal Loan Application/i);
  expect(linkElement).toBeInTheDocument();
});
