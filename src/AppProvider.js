import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ThemeProvider } from "styled-components";

import startUpActions from "./redux/startup/actions";
import themes from "./theme/config/theme.config";
import Loader from "./components/utility/loader";
import { THEMES } from "./theme/global/constants";
export default function AppProvider({ children }) {
  const themeName = useSelector(state => state.StartUp.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startUpActions.loanAmountRequest());
    dispatch(startUpActions.parseQueryString());
    dispatch(startUpActions.fillForm());
  }, [dispatch]);
  console.log(themeName, THEMES.loading);
  if (themeName === THEMES.loading) {
    return <Loader />;
  }
  return <ThemeProvider theme={themes[themeName]}>{children}</ThemeProvider>;
}
