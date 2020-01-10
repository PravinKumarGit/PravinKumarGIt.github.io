import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NofoundPage from "../404";

describe("<App/>", () => {
  it("Renders without crashing", async () => {
    const { getByText } = render(
      <BrowserRouter>
        <NofoundPage />
      </BrowserRouter>
    );
    expect(getByText("404 Page Not Found")).toBeInTheDocument();
  });
});
