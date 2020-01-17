import React from "react";

import Wrapper from "./input.styles";
export default function Input({ ...props }) {
  const {
    title,
    preFix,
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
        <div className={`textBox-Input ${errorMessage ? "required" : null}`}>
          {preFix && (
            <div
              className={`textBox-Icon ${
                errorMessage ? "iconRequired" : null
              } `}
            >
              {preFix}
            </div>
          )}
          <input {...rest} />
        </div>
        {errorMessage && <div className="message"> {errorMessage} </div>}
      </div>
    </Wrapper>
  );
}
