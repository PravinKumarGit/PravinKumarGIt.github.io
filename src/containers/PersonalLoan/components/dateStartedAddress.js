import React from "react";
import { Row, Col } from "react-grid-system";

import ToolTipIcon from "../../../components/uielements/toolTipIcon";
import { MONTHS, YEARS } from "../../../constants/options";
import Wrapper from "./Styles/dobField.styles";

export default function DateStartedAtAddress({ ...props }) {
  const {
    OptionalLabel,
    values: {
      dateStartedAtCurrentAddress: { month, year }
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
                <span>Date started at current address</span>
                <ToolTipIcon
                  ToolTipText=" Approximate date that you started living in your current
                    residence."
                />
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
                      touched.dateStartedAtCurrentAddress &&
                      errors.dateStartedAtCurrentAddress &&
                      touched.dateStartedAtCurrentAddress.month &&
                      errors.dateStartedAtCurrentAddress.month
                        ? "required"
                        : ""
                    } `}
                    value={month}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="dateStartedAtCurrentAddress.month"
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
                  {touched.dateStartedAtCurrentAddress &&
                    errors.dateStartedAtCurrentAddress &&
                    touched.dateStartedAtCurrentAddress.month &&
                    errors.dateStartedAtCurrentAddress.month && (
                      <div className="message">
                        {errors.dateStartedAtCurrentAddress.month}
                      </div>
                    )}
                </div>
                <div className="dob-input-last">
                  <select
                    className={`select-Select ${
                      touched.dateStartedAtCurrentAddress &&
                      errors.dateStartedAtCurrentAddress &&
                      touched.dateStartedAtCurrentAddress.year &&
                      errors.dateStartedAtCurrentAddress.year
                        ? "required"
                        : ""
                    } `}
                    value={year}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="dateStartedAtCurrentAddress.year"
                  >
                    <option className={`select-Option`} value="">
                      Year
                    </option>
                    {(YEARS(0, 100) || []).map((item, index) => (
                      <option
                        key={`${new Date().getTime()}${index}`}
                        className={`select-Option${index}`}
                        value={item.value}
                      >
                        {item.label}
                      </option>
                    ))}
                  </select>
                  {touched.dateStartedAtCurrentAddress &&
                    errors.dateStartedAtCurrentAddress &&
                    touched.dateStartedAtCurrentAddress.year &&
                    errors.dateStartedAtCurrentAddress.year && (
                      <div className="message">
                        {" "}
                        {errors.dateStartedAtCurrentAddress.year}{" "}
                      </div>
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
