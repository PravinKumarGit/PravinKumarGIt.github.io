import React from "react";
import Wrapper from "./pageTopHeading.styles";
export default function Select({ ...props }) {
  return (
    <Wrapper>
      <h1 className="page-heading">{props.heading}</h1>
      <p className="page-subheading">{props.subheading}</p>
    </Wrapper>
  );
}
