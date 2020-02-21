import React from "react";
import { render } from "react-test-utils";
import ErrorBoundary from "../ErrorBoundary";

describe("<ErrorBoundary>", () => {
  const errorFunc = console.error;
  const errorSpy = jest.fn();
  
  beforeAll(() => {
    console.error = errorSpy;
  });
  
  afterAll(() => {
    console.error = errorFunc
  });
  
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
