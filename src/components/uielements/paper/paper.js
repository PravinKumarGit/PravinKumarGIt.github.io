import React from "react";

import Wrapper from "./paper.styles";
export default function Paper({ ...props }) {
  return (
    <Wrapper>
      <div className="secondWrapper">{props.children}</div>
    </Wrapper>
  );
}
