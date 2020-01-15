import React from "react";

import Wrapper from "./paper.styles";
export default function Paper({ ...props }) {
  return <Wrapper>{props.children}</Wrapper>;
}
