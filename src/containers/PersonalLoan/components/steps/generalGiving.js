/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-grid-system";

import Button from "../../../../components/uielements/button";
import Divider from "../../../../components/uielements/divider";
import SubSectionHeading from "../../../../components/uielements/subSectionHeading";

import Loader from "../../../../components/utility/loader";

import OccupationSelect from "../selectOccupation";
import EmploymentSelect from "../selectEmployment";
import DateStarted from "../dateStarted";
import EmployerContact from "../employerContact";
import BusinessName from "../businessName";
import DateStartedAddress from "../dateStartedAddress";
import LivingSituation from "../selectLivingSituation";
import DependentCount from "../selectDependentCount";
import ResidentialStatus from "../selectResidentialStatus";
import CreditCardCount from "../selectCreditCardCount";
import ResidentialPaymentFrequency from "../selectResidentialPaymentFrequency";
import LandlordContactName from "../landlordContactName";
import ResidentialPayment from "../ResidentialPayment";
import LandlordContactNumber from "../landlordContactNumber";
import OwnIncomeYesNo from "../ownIncomeYesNo"
import TotalCreditLimit from "../totalCreditLimit"
import AmountBalance from "../amountBalance"

import { LIVING_SITUATION_OPTIONS } from "../../../../constants/options"

const Start = props => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isValid,
    setFieldValue
  } = props;
  const {
    occupation,
    businessName,
    employerPhone,
    employmentType,
    livingSituation,
    partnerIncome,
    numberOfDependents,
    creditCardCount,
    residentialStatus,
    residentialPaymentFrequency,
    landlordContactName,
    residentialPayment,
    landlordContactNumber,
    totalCreditLimit,
    amountBalance
  } = values;

  const { isFetching } = useSelector(state => state.loanForm);

  useEffect(() => {
    if (partnerIncome) setFieldValue("partnerIncome", "")
  }, [livingSituation])

  useEffect(() => {
    if (totalCreditLimit) setFieldValue("totalCreditLimit", "")
    if (amountBalance) setFieldValue("amountBalance", "")
  }, [creditCardCount])

  const shouldDisableNextButton = () => {
    if (creditCardCount || isValid || isFetching) {
      if (creditCardCount === "1") {
        if (totalCreditLimit && amountBalance)
          return false
        return true;
      }
      return false;
    }
    return true;
  }

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
        <Col sm={12} md={6}>
          <BusinessName
            onChange={handleChange}
            onBlur={handleBlur}
            value={businessName}
            name="businessName"
            errorMessage={touched.businessName ? errors.businessName : ""}
          />
        </Col>
        <Col sm={12} md={6}>
          <DateStarted {...props} />
        </Col>
        <Col sm={12} md={6}>
          <EmployerContact
            onChange={handleChange}
            onBlur={handleBlur}
            value={employerPhone}
            name="employerPhone"
            errorMessage={touched.employerPhone ? errors.employerPhone : ""}
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
        <Col sm={12} md={6}>
          <LivingSituation
            onChange={handleChange}
            onBlur={handleBlur}
            value={livingSituation}
            name="livingSituation"
            errorMessage={touched.livingSituation ? errors.livingSituation : ""}
          />

          {(livingSituation === LIVING_SITUATION_OPTIONS[1].value ||
            livingSituation === LIVING_SITUATION_OPTIONS[2].value)
            && <OwnIncomeYesNo
              onChange={handleChange}
              onBlur={handleBlur}
              value={partnerIncome}
              name="partnerIncome"
              errorMessage={touched.partnerIncome ? errors.partnerIncome : ""}
            />
          }
        </Col>
        <Col sm={12} md={6}>
          <DependentCount
            onChange={handleChange}
            onBlur={handleBlur}
            value={numberOfDependents}
            name="numberOfDependents"
            errorMessage={touched.numberOfDependents ? errors.numberOfDependents : ""}
          />
        </Col>
        <Col sm={12} md={6}>
          <ResidentialStatus
            onChange={handleChange}
            onBlur={handleBlur}
            value={residentialStatus}
            name="residentialStatus"
            errorMessage={
              touched.residentialStatus ? errors.residentialStatus : ""
            }
          />
        </Col>
        <Col sm={12} md={6}>
          <DateStartedAddress {...props} />
        </Col>
        <Col sm={12} md={6}>
          <ResidentialPaymentFrequency
            onChange={handleChange}
            onBlur={handleBlur}
            value={residentialPaymentFrequency}
            name="residentialPaymentFrequency"
            values={values}
            setFieldValue={setFieldValue}
            errorMessage={
              touched.residentialPaymentFrequency
                ? errors.residentialPaymentFrequency
                : ""
            }
          />
        </Col>
        <Col sm={12} md={6}>
          <LandlordContactName
            onChange={handleChange}
            onBlur={handleBlur}
            value={landlordContactName}
            name="landlordContactName"
            values={values}
            setFieldValue={setFieldValue}
            errorMessage={
              touched.landlordContactName ? errors.landlordContactName : ""
            }
          />
        </Col>
        <Col sm={12} md={6}>
          <ResidentialPayment
            onChange={handleChange}
            onBlur={handleBlur}
            value={residentialPayment}
            name="residentialPayment"
            values={values}
            setFieldValue={setFieldValue}
            errorMessage={
              touched.residentialPayment ? errors.residentialPayment : ""
            }
          />
        </Col>
        <Col sm={12} md={6}>
          <LandlordContactNumber
            onChange={handleChange}
            onBlur={handleBlur}
            value={landlordContactNumber}
            name="landlordContactNumber"
            values={values}
            setFieldValue={setFieldValue}
            errorMessage={
              touched.landlordContactNumber ? errors.landlordContactNumber : ""
            }
          />
        </Col>
        <Col xl={12}>
          <Divider />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <SubSectionHeading
            heading="Your Expenses"
            subheading={
              <>
                Please be as accurate as possible with your expenses. If they
                are greatly
                <br />
                different from what your bank statement shows, any conditional
                loan offer
                <br />
                provided
              </>
            }
          />
        </Col>
        <Col sm={12} md={6}>
          <CreditCardCount
            onChange={handleChange}
            onBlur={handleBlur}
            value={creditCardCount}
            name="creditCardCount"
            errorMessage={touched.creditCardCount ? errors.creditCardCount : ""}
          />

          {creditCardCount === "1" &&
            <>
              <TotalCreditLimit
                onChange={handleChange}
                onBlur={handleBlur}
                value={totalCreditLimit}
                name="totalCreditLimit"
                errorMessage={touched.totalCreditLimit ? errors.totalCreditLimit : ""}
              />

              <AmountBalance
                onChange={handleChange}
                onBlur={handleBlur}
                value={amountBalance}
                name="amountBalance"
                errorMessage={touched.amountBalance ? errors.amountBalance : ""}
              />
            </>}

        </Col>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}>
          <Button
            disabled={!isValid || !creditCardCount || shouldDisableNextButton()}
            buttonProps={{
              type: isFetching ? "button" : "submit"
            }}
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
