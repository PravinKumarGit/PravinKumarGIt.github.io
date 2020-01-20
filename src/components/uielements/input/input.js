import React from "react";

import Image from "../../../theme/assets/icon-tooltip.svg";
import Wrapper from "./input.styles";
export default function Input({ ...props }) {
  const {
    title,
    prefix,
    suffix,
    errorMessage,
    helpToolTip,
    ToolTipText,
    OptionalLabel,
    optional,
    ...rest
  } = props;
  return (
    <Wrapper>
      <div className="textBox">
        <div className="textBox-Label-Container">
          {title && (
            <label className="textBox-Label">
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
            </label>
          )}
        </div>
        <div className={`textBox-Input ${errorMessage ? "required" : ""}`}>
          {prefix && (
            <div
              className={`textBox-Icon ${
                errorMessage ? "iconRequired" : ""
              } `}
            >
              {prefix}
            </div>
          )}
          <input {...rest} />
          {suffix && (
            <div
              className={`textBox-Icon-Suffix ${
                errorMessage ? "iconRequired" : ""
              } `}
            >
              {suffix}
            </div>
          )}
        </div>
        {errorMessage && <div className="message"> {errorMessage} </div>}
      </div>
    </Wrapper>
  );
}
