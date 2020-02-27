import React from "react";

import Image from "../../../theme/assets/icon-tooltip.svg";
import Wrapper from "./textArea.styles";

export default function TextArea({ ...props }) {
  const {
    title,
    errorMessage,
    helpToolTip,
    ToolTipText,
    OptionalLabel,
    rows=6,
    cols=10,
    ...rest
  } = props;


  return (
    <Wrapper>
      <div className="textArea">
        <div className="textArea-Label-Container">
          {title && (
            <label className="textArea-Label">
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
                <label className="textArea-Label-Optional">optional</label>
              )}
            </label>
          )}
        </div>
        <div className={`textArea-Input ${errorMessage ? "required" : ""}`}>
          <textarea {...rest} rows={rows} cols={cols} />
        </div>
        {errorMessage && <div className="message"> {errorMessage} </div>}
      </div>
    </Wrapper>
  );
}
