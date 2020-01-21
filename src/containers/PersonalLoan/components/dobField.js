import React from "react";
import Select from "../../../components/uielements/select/select";
import { DAYS, MONTHS, YEARS } from "../../../constants/options";
import Wrapper from "./Styles/dobField.styles";

export default function LoanReasons({ ...props }) {
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
              className={`textBox-Icon ${errorMessage ? "iconRequired" : ""} `}
            >
              {prefix}
            </div>
          )}
          <div className="Input-field">
            <Select
              defaultValue="-- Select Day --"
              Title=""
              options={DAYS}
              {...props}
            />
            <Select
              defaultValue="-- Select Month --"
              Title=""
              options={MONTHS}
              {...props}
            />
            <Select
              defaultValue="-- Select Year --"
              Title=""
              options={YEARS}
              {...props}
            />
          </div>
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
