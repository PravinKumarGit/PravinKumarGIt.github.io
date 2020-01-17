import { createGlobalStyle } from "styled-components";
import { palette, font } from "styled-theme";

const GlobalStyles = createGlobalStyle`
h1,
h2,
h3,
h4,
h5,
h6,
a,
p,
li,
input,
textarea,
span,
div,
img,
svg {
  &::selection {
    background: ${palette("primary", 0)};
    color: #fff;
  }
}
*:focus{
  outline: none;
}
/********** Add Your Global CSS Here **********/

body {
  -webkit-overflow-scrolling: touch;
}

html h1,
html h2,
html h3,
html h4,
html h5,
html h6,
html a,
html p,
html li,
input,
textarea,
span,
div,
html,
body,
html a {
  margin: 0;
  font-family: ${font("primary")};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
}

html ul {
  -webkit-padding-start: 0px;
  list-style: none;
  margin-bottom: 0;
}

`;

export default GlobalStyles;
