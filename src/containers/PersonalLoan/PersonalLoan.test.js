import React from "react";
import { render } from "@testing-library/react";
import PersonalLoan from "./PersonalLoan";

test("renders learn react link", () => {
  const { getByText } = render(<PersonalLoan />);
  const linkElement = getByText(/This is Personal Loan Container/i);
  expect(linkElement).toBeInTheDocument();
});
