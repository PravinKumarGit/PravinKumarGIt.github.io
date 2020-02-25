import React from "react";
import { Row, Col } from "react-grid-system";

import { DAYS, MONTHS, YEARS } from "../../../constants/options";
import Image from "../../../theme/assets/icon-tooltip.svg";

import Wrapper from "./Styles/dobField.styles";

export default function ExpiryDate({ ...props }) {
  const {
    OptionalLabel,
    values: {
        driversLicenceExpiry: { day, month, year }
    },
    errors,
    touched,
    handleChange,
    handleBlur,
    helpToolTip,
    toolTipText,
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
          setFieldValue("driversLicenceExpiry.day", "");
        }
        break;
      case MONTHS[1].value:
        if (year && (year * 1) % 4 === 0) {
          activeDays.splice(29, 2);
          if (day && day * 1 > 29) {
            setFieldValue("driversLicenceExpiry.day", "");
          }
        } else {
          activeDays.splice(28, 3);
          if (day && day * 1 > 28) {
            setFieldValue("driversLicenceExpiry.day", "");
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
                    You need to be 18 years or older.
                  </span>}
                </i>}
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
                      touched.driversLicenceExpiry &&
                      errors.driversLicenceExpiry &&
                      touched.driversLicenceExpiry.day &&
                      errors.driversLicenceExpiry.day
                        ? "required"
                        : ""
                    } `}
                    value={day}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="driversLicenceExpiry.day"
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
                  {touched.driversLicenceExpiry &&
                    errors.driversLicenceExpiry &&
                    touched.driversLicenceExpiry.day &&
                    errors.driversLicenceExpiry.day && (
                      <div className="message"> {errors.driversLicenceExpiry.day} </div>
                    )}
                </div>


                <div className="dob-input">
                  <select
                    className={`select-Select ${
                      touched.driversLicenceExpiry &&
                      errors.driversLicenceExpiry &&
                      touched.driversLicenceExpiry.month &&
                      errors.driversLicenceExpiry.month
                        ? "required"
                        : ""
                    } `}
                    value={month}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="driversLicenceExpiry.month"
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
                  {touched.driversLicenceExpiry &&
                    errors.driversLicenceExpiry &&
                    touched.driversLicenceExpiry.month &&
                    errors.driversLicenceExpiry.month && (
                      <div className="message">{errors.driversLicenceExpiry.month}</div>
                    )}
                </div>


                <div className="dob-input-last">
                  <select
                    className={`select-Select ${
                      touched.driversLicenceExpiry &&
                      errors.driversLicenceExpiry &&
                      touched.driversLicenceExpiry.year &&
                      errors.driversLicenceExpiry.year
                        ? "required"
                        : ""
                    } `}
                    value={year}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="driversLicenceExpiry.year"
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
                  {touched.driversLicenceExpiry &&
                    errors.driversLicenceExpiry &&
                    touched.driversLicenceExpiry.year &&
                    errors.driversLicenceExpiry.year && (
                      <div className="message"> {errors.driversLicenceExpiry.year} </div>
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
