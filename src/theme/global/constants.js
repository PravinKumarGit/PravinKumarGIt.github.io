const rowStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "row wrap"
};
const colStyle = {
  marginBottom: "16px"
};
const mediaBreakPoints = {
  xs: 320,
  s: 468,
  m: 767,
  l: 1023,
  lg: 1439,
  xl: 1810
};
const basicStyle = {
  rowStyle,
  colStyle,
  mediaBreakPoints
};

export const THEMES={
  default: "defaultTheme",
  rentBond: "rentBondTheme"
}
export default basicStyle;
