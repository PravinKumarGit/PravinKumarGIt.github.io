import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import { BrowserRouter } from "react-router-dom";

import PersonalLoan from "../PersonalLoan";
const mockStore = configureMockStore();
const store = mockStore({});
test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <PersonalLoan />
      </BrowserRouter>
    </Provider>
  );
  const linkElement = getByText(/Personal Loan Application/i);
  expect(linkElement).toBeInTheDocument();
});
