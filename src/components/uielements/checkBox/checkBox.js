import React from "react";

import Wrapper from "./checkBox.styles";
export default function CheckBox({ ...props }) {
  const {
    title,
    helpToolTip,
    OptionalLabel,
    errorMessage,
    ToolTipText,
    label,
    children,
    checked,
    ...rest
  } = props;
  return (
    <Wrapper>
      <div className={`checkBox-Component ${errorMessage ? "required" : ""}`}>
        {title && (
          <label className="checkBox-Label">
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
              <label className="checkBox-Label-Optional">optional</label>
            )}
          </label>
        )}
        {checked ? (
          <input type="checkbox" className="checkBox-Input" checked {...rest} />
        ) : (
          <input type="checkbox" className="checkBox-Input" {...rest} />
        )}
        <div className="checkBox-InformationContainer">
          <div className="checkBox-Message">
            {label}
            {children}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
