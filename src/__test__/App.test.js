import React from "react";
import { render } from "test-utils";
import App from "../App";

describe("<App/>", () => {
  it("Renders without crashing", async () => {
    const { getByText } = render(<App />);
    expect(getByText("Loading...")).toBeInTheDocument();
  });
});
