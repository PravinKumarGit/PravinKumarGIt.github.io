/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-grid-system";

import Button from "../../../../components/uielements/button";
import Divider from "../../../../components/uielements/divider";
import FieldLabel from "../../../../components/uielements/fieldLabel";
import SubSectionHeading from "../../../../components/uielements/subSectionHeading";

import Loader from "../../../../components/utility/loader";

import PayslipField from "../payslipField";
import CentreLinkField from "../centreLinkField";
import SendViaEmail from "../sendViaEmail";
import SendViaFax from "../sendViaFax";
import IdentificationType from "../selectIdentificationType";
import IdentityVerification from "../identityVerification"
import DriverLicence from "../driverLicence";

const Finally = props => {
  const {
    values: {
      payslip,
      centrelink,
      identificationType
    },
    errors,
    touched,
    handleChange,
    handleBlur,
    isValid,
    setFieldValue,
    setFieldValueAndTouchStatus

  } = props;

  useEffect(() => {
    setFieldValueAndTouchStatus("driversLicenceCardNumber")
    setFieldValueAndTouchStatus("driversLicenceState")
    setFieldValueAndTouchStatus("driversLicenceNumber")
    setFieldValueAndTouchStatus("driversLicenceExpiry", { day: "", month: "", year: "" })
  }, [identificationType])

  const { isFetching } = useSelector(state => state.loanForm);
  return (
    <>
      <Row>
        <Col xl={12}>
          <SubSectionHeading heading="Additional Documents" />
        </Col>
        <Col sm={12} md={6}>
          <FieldLabel
            title="Identification"
            helpToolTip
            ToolTipText="identification"
          />
          <IdentificationType
            onChange={handleChange}
            onBlur={handleBlur}
            value={identificationType}
            name="identificationType"
            errorMessage={touched.identificationType ? errors.identificationType : ""}
          />
          {identificationType === "Drivers Licence" && <DriverLicence {...props} />}
          <IdentityVerification />
        </Col>
        <Col sm={12} md={6}>
          <FieldLabel title="Required Files" />
          <PayslipField
            onChange={handleChange}
            onBlur={handleBlur}
            value={payslip}
            setFieldValue={setFieldValue}
            errorMessage={touched.payslip ? errors.payslip : ""}
          />
          <CentreLinkField
            onChange={handleChange}
            onBlur={handleBlur}
            value={centrelink}
            setFieldValue={setFieldValue}
            errorMessage={touched.centrelink ? errors.centrelink : ""}
          />
          <FieldLabel title="Alternate Methods" />
          <SendViaEmail />
          <SendViaFax />
        </Col>
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
