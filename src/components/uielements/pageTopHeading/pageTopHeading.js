import React from "react";
import Wrapper from "./pageTopHeading.styles";
export default function Select({ ...props }) {
  return (
    <Wrapper>
      <h1 class="page-heading">{props.heading}</h1>
      <p class="page-subheading">{props.subheading}</p>
    </Wrapper>
  );
}
