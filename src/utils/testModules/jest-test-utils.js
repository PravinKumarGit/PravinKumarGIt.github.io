export function expectThat(mockedFunction, callIndex = 0) {
  const received = (...args) => {
    const requiedCalls = callIndex + 1;
    expect(mockedFunction.mock.calls.length).toBeGreaterThanOrEqual(requiedCalls);
    args.forEach((arg, index) => {
      expect(mockedFunction.mock.calls[callIndex][index]).toBe(arg)
    })
  };
  return {
    received,
    calledTimes: (callCount) => {
      expect(mockedFunction.mock.calls.length).toBe(1);

      return {
        received
      }
    }
  }
}