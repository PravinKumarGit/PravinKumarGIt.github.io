import React from "react";

import Wrapper from "./select.styles";
export default function Select({ ...props }) {
  return (
    <Wrapper>
      <select defaultValue="Hello" {...props}>
        <option value="hello"> Hi this is hello</option>
      </select>
    </Wrapper>
  );
}
