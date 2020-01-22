import React from "react";
import Select from "../../../components/uielements/select/select";
import { DAYS, MONTHS, YEARS } from "../../../constants/options";
import Image from "../../../theme/assets/icon-tooltip.svg";

import Wrapper from "./Styles/dobField.styles";

export default function LoanReasons({ ...props }) {
  const { prefix, suffix, errorMessage, OptionalLabel } = props;
  return (
    <Wrapper>
      <div className="selectBox">
        <div className="selectBox-Label-Container">
          <label className="selectBox-Label">
            <span>Date of Birth</span>
            <i className="toolTip-Icon">
              <img src={Image} alt="help icon" />
              <span className="toolTip-Text">
                You need to be 18 years or older.
              </span>
            </i>
            {OptionalLabel && (
              <label className="selectBox-Label-Optional">optional</label>
            )}
          </label>
        </div>
        <div className={`selectBox-Input ${errorMessage ? "required" : ""}`}>
          {prefix && (
            <div
              className={`selectBox-Icon ${
                errorMessage ? "iconRequired" : ""
              } `}
            >
              {prefix}
            </div>
          )}
          <div className="Input-field">
            <select
              className={`select-Select ${errorMessage ? "required" : ""} `}
><span>{console.log(DAYS)}</span>
              {(DAYS || []).map((item, index) => (
                <option
                  key={`${new Date().getTime()}${index}`}
                  className={`select-Option${index}`}
                  value={item.value}
                >
                  {item.label}
                </option>
              ))}
            </select>
            <select
              className={`select-Select ${errorMessage ? "required" : ""} `}
            >
              {(MONTHS || []).map((item, index) => (
                <option
                  key={`${new Date().getTime()}${index}`}
                  className={`select-Option${index}`}
                  value={item.value}
                >
                  {item.label}
                </option>
              ))}
            </select>
            <select
              className={`select-Select ${errorMessage ? "required" : ""} `}
            >
              {(YEARS || []).map((item, index) => (
                <option
                  key={`${new Date().getTime()}${index}`}
                  className={`select-Option${index}`}
                  value={item.value}
                >
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          {suffix && (
            <div
              className={`selectBox-Icon-Suffix ${
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
