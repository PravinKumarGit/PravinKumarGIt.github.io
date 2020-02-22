import React from "react";
import Image from "../../../theme/assets/icon-tooltip.svg";
import Wrapper from "./fieldLabel.styles";
export default function FieldLabel({ ...props }) {
  const { title, helpToolTip, ToolTipText, OptionalLabel } = props

  return <Wrapper >
    {title && (<label className="select-Label">
      {title}
      {helpToolTip && (
        <i className="toolTip-Icon">
          <img src={Image} alt="help icon" />
          {ToolTipText && (
            <span className="toolTip-Text">{ToolTipText}</span>
          )}
        </i>
      )}
      {OptionalLabel && (
        <label className="textBox-Label-Optional">optional</label>
      )}
    </label>)}</Wrapper>
}
