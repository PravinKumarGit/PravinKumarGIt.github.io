import React from "react";

import Wrapper from "./verification.styles";
export default function Verification({ ...props }) {
  const {
    title,
    leftButtonProps,
    leftButtonLabel,
    rightButtonProps,
    rightButtonLabel,
    errorMessage,
    helpToolTip,
    ToolTipText,
    OptionalLabel,
    ...rest
  } = props;

  return (
    <Wrapper>
      <div className="verification">
        <p>{title}</p>
        <div className="verification-options">
          <div className="option-container">
            <label >
              <input {...rest}{...leftButtonProps} type="radio" />
              {leftButtonLabel}
            </label>
          </div>
          <div>
            <label>
              <input {...rest}{...rightButtonProps} type="radio" />
              {rightButtonLabel}</label>
          </div>
        </div>
      </div>
    </Wrapper >
  );
}
