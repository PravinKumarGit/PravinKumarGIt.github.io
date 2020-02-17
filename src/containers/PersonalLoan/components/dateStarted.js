import React from "react";
import { Row, Col } from "react-grid-system";

import { MONTHS, YEARS } from "../../../constants/options";
import Image from "../../../theme/assets/icon-tooltip.svg";

import Wrapper from "./Styles/dobField.styles";

export default function DateStarted({ ...props }) {
  const {
    OptionalLabel,
    values: {
      dateStarted: { month, year }
    },
    errors,
    touched,
    handleChange,
    handleBlur
  } = props;

  return (
    <Wrapper>
      <Row>
        <Col xl={12}>
          <div className="selectBox">
            <div className="selectBox-Label-Container">
              <label className="selectBox-Label">
                <span>Date started with employer</span>
                <i className="toolTip-Icon">
                  <img src={Image} alt="help icon" />
                  <span className="toolTip-Text">
                    What date did you start with your employer, month and year
                    are required.
                  </span>
                </i>
                {OptionalLabel && (
                  <label className="selectBox-Label-Optional">optional</label>
                )}
              </label>
            </div>
            <Row className={`selectBox-Input`}>
              <Col xs={12} className="dob-input-wrap">
                <div className="dob-input">
                  <select
                    className={`select-Select ${
                      touched.dateStarted &&
                      errors.dateStarted &&
                      touched.dateStarted.month &&
                      errors.dateStarted.month
                        ? "required"
                        : ""
                    } `}
                    value={month}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="dateStarted.month"
                  >
                    <option className={`select-Option`} value="">
                      Month
                    </option>
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
                  {touched.dateStarted &&
                    errors.dateStarted &&
                    touched.dateStarted.month &&
                    errors.dateStarted.month && (
                      <div className="message">{errors.dateStarted.month}</div>
                    )}
                </div>
                <div className="dob-input-last">
                  <select
                    className={`select-Select ${
                      touched.dateStarted &&
                      errors.dateStarted &&
                      touched.dateStarted.year &&
                      errors.dateStarted.year
                        ? "required"
                        : ""
                    } `}
                    value={year}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="dateStarted.year"
                  >
                    <option className={`select-Option`} value="">
                      Year
                    </option>
                    {(YEARS(0, 70) || []).map((item, index) => (
                      <option
                        key={`${new Date().getTime()}${index}`}
                        className={`select-Option${index}`}
                        value={item.value}
                      >
                        {item.label}
                      </option>
                    ))}
                  </select>
                  {touched.dateStarted &&
                    errors.dateStarted &&
                    touched.dateStarted.year &&
                    errors.dateStarted.year && (
                      <div className="message"> {errors.dateStarted.year} </div>
                    )}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
}
