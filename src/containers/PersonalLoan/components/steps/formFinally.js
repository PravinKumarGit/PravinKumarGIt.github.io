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
import SendViaEmail from "../sendViaEmail";
import SendViaFax from "../sendViaFax";
import IdentificationType from "../selectIdentificationType";
import IdentityVerification from "../identityVerification"
import DriverLicence from "../driverLicence";
import Medicare from "../medicare"
import WorkContactNumber from "../workContactNumber"
import HomePhoneNumber from "../homePhoneNumber"
import ContactName from "../contactName"
import ContactNumber from "../contactNumber"
import RelationToYou from "../relationToYou"

const Finally = props => {
  const {
    values: {
      payslip,
      identificationType,
      workContactNumber,
      homePhoneNumber,
      alternateContactName,
      alternateContactNumber,
      alternateRelationship
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
    if (identificationType) {
      //driver licence fields
      setFieldValueAndTouchStatus("driversLicenceCardNumber")
      setFieldValueAndTouchStatus("driversLicenceState")
      setFieldValueAndTouchStatus("driversLicenceNumber")
      setFieldValueAndTouchStatus("driversLicenceExpiry", { day: "", month: "", year: "" })
      // medicare fields
      setFieldValueAndTouchStatus("medicareName")
      setFieldValueAndTouchStatus("medicareNumber")
      setFieldValueAndTouchStatus("medicareReference")
      setFieldValueAndTouchStatus("medicareCardColour")
      setFieldValueAndTouchStatus("medicareDateExpiry", { day: "", month: "", year: "" })
    }
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
          {identificationType === "Medicare" && <Medicare {...props} />}
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
        <Col sm={12} md={6}>
          <FieldLabel title="Additional Contact Details" />
          <WorkContactNumber
            onChange={handleChange}
            onBlur={handleBlur}
            value={workContactNumber}
            name="workContactNumber"
            errorMessage={touched.workContactNumber ? errors.workContactNumber : ""}
          />
          <HomePhoneNumber
            onChange={handleChange}
            onBlur={handleBlur}
            value={homePhoneNumber}
            name="homePhoneNumber"
            errorMessage={touched.homePhoneNumber ? errors.homePhoneNumber : ""} />

        </Col>
        <Col sm={12} md={6}>
          <FieldLabel
            title="Alternate Account Contact Person"
            helpToolTip
            ToolTipText="Please provide us with an alternative contact which we may use to reach you if required."
          />
          <ContactName
            onChange={handleChange}
            onBlur={handleBlur}
            value={alternateContactName}
            name="alternateContactName"
            errorMessage={touched.alternateContactName ? errors.alternateContactName : ""} />

          <ContactNumber
            onChange={handleChange}
            onBlur={handleBlur}
            value={alternateContactNumber}
            name="alternateContactNumber"
            errorMessage={touched.alternateContactNumber ? errors.alternateContactNumber : ""} />

          <RelationToYou
            onChange={handleChange}
            onBlur={handleBlur}
            value={alternateRelationship}
            name="alternateRelationship"
            errorMessage={touched.alternateRelationship ? errors.alternateRelationship : ""}
          />
        </Col>
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
