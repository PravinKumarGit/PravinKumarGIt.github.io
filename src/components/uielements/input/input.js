import React from "react";

import Wrapper from "./input.styles";
export default function Input({ ...props }) {
  return (
    <Wrapper>
      <input {...props} />
    </Wrapper>
  );
}
