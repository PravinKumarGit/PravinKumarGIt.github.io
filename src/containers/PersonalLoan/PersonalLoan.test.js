import React from "react";
import { render } from "@testing-library/react";
import PersonalLoan from "./PersonalLoan";

test("renders learn react link", () => {
  const { getByText } = render(<PersonalLoan />);
  const linkElement = getByText(/Personal Loan Application/i);
  expect(linkElement).toBeInTheDocument();
});
