import React from "react";
import { render } from "@testing-library/react";
import ErrorBoundary from "../ErrorBoundary";

describe("<ErrorBoundary>", () => {
  it(`shows the fallback when there's an error`, () => {
    const Throws = () => {
        throw new Error('Oh no!')
    };
    const { getByText, unmount } = render(
      <ErrorBoundary>
        <Throws />
      </ErrorBoundary>
    );
    expect(getByText("Loading failed! Please reload.")).toBeInTheDocument();
    unmount();
  });
});
