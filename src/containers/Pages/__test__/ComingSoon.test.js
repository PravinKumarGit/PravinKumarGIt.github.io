import React from "react";
import { render } from "test-utils";
import { BrowserRouter } from "react-router-dom";

import ComingSoon from "../ComingSoon";

describe("<App/>", () => {
  it("Renders without crashing", async () => {
    const { getByText } = render(
      <BrowserRouter>
        <ComingSoon />
      </BrowserRouter>
    );
    expect(
      getByText("Thank you for checking out our app.")
    ).toBeInTheDocument();
  });
});
