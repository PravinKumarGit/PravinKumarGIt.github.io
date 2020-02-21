/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from "react";
import {useOptionalStateManager} from "../useOptionalStateManager";
import {expectThat} from "jest-test-utils";

jest.mock("react");

describe("useOptionalSelectManager", () => {
  beforeEach(() => {
    useState.mockClear();
  });
  
  it("runs without throwing", async () => {
    stubUseState();
    
    run();
  });

  it("calls useState passing in initial shouldShow", () => {
    const expected = false;
    stubUseState();
    
    run({shouldShow: expected});

    expectThat(useState).received(expected);
  });

  it("calls setSelectValue with defaultValue when should show changes to true", () => {
    const expected = 'expected';
    const setSelectValue = jest.fn();
    stubUseState([false, jest.fn()]);

    run({shouldShow: true, setSelectValue, defaultValue: expected});

    expectThat(setSelectValue).calledTimes(1).received(expected);
  });
  
  it("calls setPreviousShouldShow with shouldShow when should show changes to true", () => {
    const expected = 'expected';
    const setStateFunc = jest.fn();
    stubUseState([false, setStateFunc]);

    run({shouldShow: true, defaultValue: expected});

    expectThat(setStateFunc).calledTimes(1).received(true);
  });
  

  it("calls setSelectValue with undefined when should show changes to false", () => {
    const expected = 'expected';
    const setSelectValue = jest.fn();
    stubUseState([true, jest.fn()]);

    run({shouldShow: false, setSelectValue, defaultValue: expected});

    expectThat(setSelectValue).calledTimes(1).received(undefined);
  });
  
  it("calls setPreviousShouldShow with shouldShow when should show changes to false", () => {
    const expected = 'expected';
    const setStateFunc = jest.fn();
    stubUseState([true, setStateFunc]);

    run({shouldShow: false, defaultValue: expected});

    expectThat(setStateFunc).calledTimes(1).received(false);
  });
  
  

  const stubUseState = (returnValue = []) => {
    useState.mockReturnValue(returnValue);
  };

  const run = ({shouldShow, setSelectValue = jest.fn(), defaultValue} = {}) => {
    useOptionalStateManager(shouldShow, defaultValue, setSelectValue);
  };
});
