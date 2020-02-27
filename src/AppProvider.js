import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import themes from "./theme/config/theme.config";

export default function AppProvider({ children }) {
  const themeName = useSelector(state => state.StartUp.theme);
  return <ThemeProvider theme={themes[themeName]}>{children}</ThemeProvider>;
}
