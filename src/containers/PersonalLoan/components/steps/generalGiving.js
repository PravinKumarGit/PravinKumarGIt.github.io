import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-grid-system";

import Button from "../../../../components/uielements/button";
import Divider from "../../../../components/uielements/divider";
import SubSectionHeading from "../../../../components/uielements/subSectionHeading";

import Loader from "../../../../components/utility/loader";

import OccupationSelect from "../selectOccupation";
import EmploymentSelect from "../selectEmployment";

const Start = props => {
  const {
    values: { occupation, employmentType },
    errors,
    touched,
    handleChange,
    handleBlur,
    isValid
  } = props;
  const { isFetching } = useSelector(state => state.loanForm);
  return (
    <>
      <Row>
        <Col xl={12}>
          <SubSectionHeading heading="Your Employment Details" />
        </Col>
        <Col sm={12} md={6}>
          <OccupationSelect
            onChange={handleChange}
            onBlur={handleBlur}
            value={occupation}
            name="occupation"
            errorMessage={touched.occupation ? errors.occupation : ""}
          />
        </Col>
        <Col sm={12} md={6}>
          <EmploymentSelect
            onChange={handleChange}
            onBlur={handleBlur}
            value={employmentType}
            name="employmentType"
            errorMessage={touched.employmentType ? errors.employmentType : ""}
          />
        </Col>
        <Col xl={12}>
          <Divider />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <SubSectionHeading heading="Your Living Situation" />
        </Col>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}></Col>
        <Col xl={12}>
          <Divider />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <SubSectionHeading
            heading="Your Expenses"
            subheading={
              <span>
                Please be as accurate as possible with your expenses. If they
                are greatly different from what your bank statement shows, any
                conditional loan offer provided
              </span>
            }
          />
        </Col>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}>
          <Button
            type={isFetching ? "button" : "submit"}
            disabled={!isValid || !touched.loanAmount}
          >
            {isFetching ? (
              <Loader type="light" label="processing..." />
            ) : (
              "Next"
            )}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Start;
