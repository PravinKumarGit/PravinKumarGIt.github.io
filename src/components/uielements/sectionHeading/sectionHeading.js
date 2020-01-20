import React from "react";
import Wrapper from "./sectionHeading.styles";
export default function Select({ ...props }) {
  return (
    <Wrapper>
      {props.heading && <h1 className="page-heading">{props.heading}</h1>}
      {props.subheading && (
        <p className="page-subheading">{props.subheading}</p>
      )}
    </Wrapper>
  );
}
