import React from "react";
import { Row, Col } from "react-grid-system";

import { DAYS, MONTHS, YEARS } from "../../../constants/options";
import Image from "../../../theme/assets/icon-tooltip.svg";

import Wrapper from "./Styles/dobField.styles";

export default function MedicareExpiryDate({ ...props }) {
  const {
    OptionalLabel,
    values: {
        medicareDateExpiry: { day, month, year }
    },
    errors,
    touched,
    handleChange,
    handleBlur,
    helpToolTip,
    toolTipText,
    setFieldValue,
    hideDateField
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
          setFieldValue("medicareDateExpiry.day", "");
        }
        break;
      case MONTHS[1].value:
        if (year && (year * 1) % 4 === 0) {
          activeDays.splice(29, 2);
          if (day && day * 1 > 29) {
            setFieldValue("medicareDateExpiry.day", "");
          }
        } else {
          activeDays.splice(28, 3);
          if (day && day * 1 > 28) {
            setFieldValue("medicareDateExpiry.day", "");
          }
        }
        break;
      default:
    }
    return activeDays;
  };

  return (
    <Wrapper>
      <Row>
        <Col xl={12}>
          <div className="selectBox">
            <div className="selectBox-Label-Container">
              <label className="selectBox-Label">
                <span>Expiry date</span>
               {helpToolTip&& <i className="toolTip-Icon">
                  <img src={Image} alt="help icon" />
                 {toolTipText&& <span className="toolTip-Text">
                    {toolTipText}
                  </span>}
                </i>}
                 {OptionalLabel && (
                  <label className="selectBox-Label-Optional">optional</label>
                )}
              </label>
            </div>

            <Row className={`selectBox-Input`}>
              <Col xs={12} className="dob-input-wrap">
                {hideDateField&&<div className="dob-input">
                  <select
                    className={`select-Select ${
                      touched.medicareDateExpiry &&
                      errors.medicareDateExpiry &&
                      touched.medicareDateExpiry.day &&
                      errors.medicareDateExpiry.day
                        ? "required"
                        : ""
                    } `}
                    value={day}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="medicareDateExpiry.day"
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
                  {touched.medicareDateExpiry &&
                    errors.medicareDateExpiry &&
                    touched.medicareDateExpiry.day &&
                    errors.medicareDateExpiry.day && (
                      <div className="message"> {errors.medicareDateExpiry.day} </div>
                    )}
                </div>}


                <div className="dob-input">
                  <select
                    className={`select-Select ${
                      touched.medicareDateExpiry &&
                      errors.medicareDateExpiry &&
                      touched.medicareDateExpiry.month &&
                      errors.medicareDateExpiry.month
                        ? "required"
                        : ""
                    } `}
                    value={month}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="medicareDateExpiry.month"
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
                  {touched.medicareDateExpiry &&
                    errors.medicareDateExpiry &&
                    touched.medicareDateExpiry.month &&
                    errors.medicareDateExpiry.month && (
                      <div className="message">{errors.medicareDateExpiry.month}</div>
                    )}
                </div>


                <div className="dob-input-last">
                  <select
                    className={`select-Select ${
                      touched.medicareDateExpiry &&
                      errors.medicareDateExpiry &&
                      touched.medicareDateExpiry.year &&
                      errors.medicareDateExpiry.year
                        ? "required"
                        : ""
                    } `}
                    value={year}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="medicareDateExpiry.year"
                  >
                    <option className={`select-Option`} value="">
                      Year
                    </option>
                    {(YEARS(0,11,true) || []).map((item, index) => (
                      <option
                        key={`${new Date().getTime()}${index}`}
                        className={`select-Option${index}`}
                        value={item.value}
                      >
                        {item.label}
                      </option>
                    ))}
                  </select>
                  {touched.medicareDateExpiry &&
                    errors.medicareDateExpiry &&
                    touched.medicareDateExpiry.year &&
                    errors.medicareDateExpiry.year && (
                      <div className="message"> {errors.medicareDateExpiry.year} </div>
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
