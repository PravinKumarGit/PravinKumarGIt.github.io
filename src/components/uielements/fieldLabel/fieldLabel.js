import React from "react";

import ToolTipIcon from "../../../components/uielements/toolTipIcon";
import Wrapper from "./fieldLabel.styles";
export default function FieldLabel({ ...props }) {
  const { title, helpToolTip, ToolTipText, OptionalLabel } = props;

  return (
    <Wrapper>
      {title && (
        <label className="select-Label">
          {title}
          {helpToolTip && <ToolTipIcon ToolTipText={ToolTipText} />}
          {OptionalLabel && (
            <label className="textBox-Label-Optional">optional</label>
          )}
        </label>
      )}
    </Wrapper>
  );
}
