import React from "react";
import DatePicker from "react-date-picker";

import Image from "../../../theme/assets/icon-tooltip.svg";
import Wrapper from "./datePicker.styles";

export default function DatePickerWrapper({ ...props }) {
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
        <DatePicker
          format="dd/MM/y"
          dayPlaceholder="dd"
          monthPlaceholder="mm"
          yearPlaceholder="yyyy"
          {...rest}
        />
        {errorMessage && <div className="message"> {errorMessage} </div>}
      </div>
    </Wrapper>
  );
}
