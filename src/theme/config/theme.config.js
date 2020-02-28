import defaultTheme from "./default";
import rentBondTheme from "./custom";
import { THEMES } from "../global/constants";
const themes = {};
themes[THEMES.default] = defaultTheme;
themes[THEMES.rentBond] = rentBondTheme;

export const themeConfig = {
  // theme: THEMES.default,
  theme: THEMES.rentBond
};
export const getTheme = ({ utm_campaign }) => {
  switch (utm_campaign) {
    case "RENT":
      return THEMES.rentBond;
    default:
      return THEMES.default;
  }
};
export default themes;
