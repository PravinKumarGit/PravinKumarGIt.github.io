import React from "react";
import { Row, Col } from "react-grid-system";
import ToolTipIcon from "../../../components/uielements/toolTipIcon";

import { DAYS, MONTHS, YEARS } from "../../../constants/options";

import Wrapper from "./Styles/dobField.styles";

export default function LoanReasons({ ...props }) {
  const {
    OptionalLabel,
    values: {
      dateOfBirth: { day, month, year }
    },
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue
  } = props;

  const activeDays = [...DAYS];
  const activeDay = () => {
    switch (~~month) {
      case MONTHS[5].value:
      case MONTHS[10].value:
      case MONTHS[3].value:
      case MONTHS[8].value:
        activeDays.splice(30, 1);
        if (day && day * 1 === 31) {
          setFieldValue("dateOfBirth.day", "");
        }
        break;
      case MONTHS[1].value:
        if (year && (year * 1) % 4 === 0) {
          activeDays.splice(29, 2);
          if (day && day * 1 > 29) {
            setFieldValue("dateOfBirth.day", "");
          }
        } else {
          activeDays.splice(28, 3);
          if (day && day * 1 > 28) {
            setFieldValue("dateOfBirth.day", "");
          }
        }
        break;
      default:
    }
    return activeDays;
  };

  return (
    <Wrapper>
      <div className="selectBox">
        <div className="selectBox-Label-Container">
          <label className="selectBox-Label">
            <span>Date of Birth</span>
            <ToolTipIcon ToolTipText="You need to be 18 years or older." />
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
                  touched.dateOfBirth &&
                  errors.dateOfBirth &&
                  touched.dateOfBirth.day &&
                  errors.dateOfBirth.day
                    ? "required"
                    : ""
                } `}
                value={day}
                onChange={handleChange}
                onBlur={handleBlur}
                name="dateOfBirth.day"
              >
                <option className={`select-Option`} value="">
                  Day
                </option>
                {(activeDay() || []).map((item, index) => (
                  <option
                    key={`${new Date().getTime()}${index}`}
                    className={`select-Option${index}`}
                    value={item.value}
                  >
                    {item.label}
                  </option>
                ))}
              </select>
              {touched.dateOfBirth &&
                errors.dateOfBirth &&
                touched.dateOfBirth.day &&
                errors.dateOfBirth.day && (
                  <div className="message"> {errors.dateOfBirth.day} </div>
                )}
            </div>
            <div className="dob-input">
              <select
                className={`select-Select ${
                  touched.dateOfBirth &&
                  errors.dateOfBirth &&
                  touched.dateOfBirth.month &&
                  errors.dateOfBirth.month
                    ? "required"
                    : ""
                } `}
                value={month}
                onChange={handleChange}
                onBlur={handleBlur}
                name="dateOfBirth.month"
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
              {touched.dateOfBirth &&
                errors.dateOfBirth &&
                touched.dateOfBirth.month &&
                errors.dateOfBirth.month && (
                  <div className="message">{errors.dateOfBirth.month}</div>
                )}
            </div>
            <div className="dob-input-last">
              <select
                className={`select-Select ${
                  touched.dateOfBirth &&
                  errors.dateOfBirth &&
                  touched.dateOfBirth.year &&
                  errors.dateOfBirth.year
                    ? "required"
                    : ""
                } `}
                value={year}
                onChange={handleChange}
                onBlur={handleBlur}
                name="dateOfBirth.year"
              >
                <option className={`select-Option`} value="">
                  Year
                </option>
                {(YEARS() || []).map((item, index) => (
                  <option
                    key={`${new Date().getTime()}${index}`}
                    className={`select-Option${index}`}
                    value={item.value}
                  >
                    {item.label}
                  </option>
                ))}
              </select>
              {touched.dateOfBirth &&
                errors.dateOfBirth &&
                touched.dateOfBirth.year &&
                errors.dateOfBirth.year && (
                  <div className="message"> {errors.dateOfBirth.year} </div>
                )}
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
}
