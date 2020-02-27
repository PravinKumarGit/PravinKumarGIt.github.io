import React from "react";
import ToolTipIcon from "../toolTipIcon"
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
    type,
    onChange,
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
                <ToolTipIcon ToolTipText={ToolTipText} />
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
              className={`textBox-Icon ${errorMessage ? "iconRequired" : ""} `}
            >
              {prefix}
            </div>
          )}
          {(() => {
            switch (type) {
              case "number":
                return (
                  <input
                    {...rest}
                    type="text"
                    onChange={onChange}
                    onKeyPress={evt => {
                      if (evt.which < 48 || evt.which > 57) {
                        evt.preventDefault();
                      }
                    }}
                  />
                );
              default:
                return <input {...rest} type={type} onChange={onChange} />;
            }
          })()}
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
