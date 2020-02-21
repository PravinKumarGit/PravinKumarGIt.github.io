import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-grid-system";

import Button from "../../../../components/uielements/button";
import Divider from "../../../../components/uielements/divider";
import SubSectionHeading from "../../../../components/uielements/subSectionHeading";

import Loader from "../../../../components/utility/loader";

const Finally = props => {
  const { touched, isValid } = props;
  const { isFetching } = useSelector(state => state.loanForm);
  return (
    <>
      <Row>
        <Col xl={12}>
          <SubSectionHeading heading="Additional Documents" />
        </Col>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}></Col>
        <Col xl={12}>
          <Divider />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <SubSectionHeading
            heading="Additional Personal Details"
            subheading={
              <>
                <p>
                  Speed up your loan outcome and give yourself the best chance
                  of approval
                </p>
                <p>by filling in the following details.</p>
              </>
            }
          />
        </Col>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}></Col>
        <Col xl={12}>
          <Divider />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <SubSectionHeading heading="And Finally" />
        </Col>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}>
          <Button
            type={isFetching ? "button" : "submit"}
            disabled={!isValid || !touched.loanAmount || isFetching}
          >
            {isFetching ? (
              <Loader type="light" label="processing..." />
            ) : (
              "Submit"
            )}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Finally;
