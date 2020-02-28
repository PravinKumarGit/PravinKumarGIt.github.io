import React from "react";
import ToolTipIcon from "../toolTipIcon";

import Wrapper from "./select.styles";
export default function Select({ ...props }) {
  const {
    options,
    valueKey,
    labelKey,
    loading,
    Title,
    helpToolTip,
    ToolTipText,
    OptionalLabel,
    errorMessage,
    isPlaceHolder,
    placeholder,
    ...rest
  } = props;

  return (
    <Wrapper>
      <div className="select-Component" data-testid="select-component">
        {Title && (
          <label className="select-Label">
            {Title}
            {helpToolTip && <ToolTipIcon ToolTipText={ToolTipText} />}
            {OptionalLabel && (
              <label className="textBox-Label-Optional">optional</label>
            )}
          </label>
        )}
        {loading ? (
          <div className="select-loader">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="spinner"
              className="svg-inline--fa fa-spinner fa-w-16 select-spinner-icon"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
              ></path>
            </svg>
          </div>
        ) : (
          <select
            className={`select-Select ${errorMessage ? "required" : ""} `}
            {...rest}
          >
            {isPlaceHolder && <option value="">{placeholder}</option>}
            {(options || []).map((item, index) => (
              <option
                key={`${new Date().getTime()}${index}`}
                className={`select-Option${index}`}
                value={item[valueKey] || item.value}
              >
                {item[labelKey] || item.label}
              </option>
            ))}
          </select>
        )}
        {errorMessage && <p className="message"> {errorMessage} </p>}
      </div>
    </Wrapper>
  );
}
