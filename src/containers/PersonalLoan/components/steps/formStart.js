import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-grid-system";

import Button from "../../../../components/uielements/button";
import Select from "../../../../components/uielements/select/select";
import Divider from "../../../../components/uielements/divider";
import actions from "../../../../redux/startup/actions";
import SubSectionHeading from "../../../../components/uielements/subSectionHeading";

import Loader from "../../../../components/utility/loader";

import LoanSelect from "../selectForLoanResoans";
import TitleSelect from "../selectForNamePrefix";
import MobileNoField from "../mobileNoField";
import FirstName from "../firstName";
import MiddleName from "../middleName";
import LastName from "../lastName";
import EmailField from "../emailField";
import DobInput from "../dobField";
import TermsCheckBox from "../termsCheckBox";
import SelectIncomeFrequency from "../selectIncomeFrequency";
import IncomeField from "../incomeField";
import ReferralCheckbox from "../referralCheckbox";
import AddressField from "../addressField";
import ModalSaccWarning from "../modalSaccWarning";

const Start = props => {
  const [saccModal, setSaccModal] = useState(false);
  const {
    values: {
      loanAmount,
      loanReason,
      title,
      mobilePhone,
      firstName,
      middleName,
      lastName,
      emailAddress,
      acceptsPrivacyPolicy,
      incomeFrequency,
      totalIncome,
      referralConsent
    },
    errors,
    touched,
    handleChange,
    handleBlur,
    isValid,
    countryCodes,
    setFieldValue,
  } = props;

  let options = [];
  if (!!countryCodes && countryCodes.length > 0 && options.length === 0) {
    if (countryCodes.length > 0)
      countryCodes.forEach(country => {
        options.push({
          value: country.code,
          label: `(${country.code})\t${country.countryName}`
        });
      });
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loanAmountRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const StartUp = useSelector(state => state.StartUp);
  const { isFetching } = useSelector(state => state.loanForm);
  const handleSumit = () => {
    if (!isFetching) {
      if (loanAmount * 1 <= 2000) {
        setSaccModal(true);
      } else {
        props.submitForm();
      }
    }
  };
  const continueSumit = () => {
    setSaccModal(false);
    props.submitForm();
  };
  return (
    <>
      <Row>
        <ModalSaccWarning
          visible={saccModal}
          close={() => setSaccModal(false)}
          continue={continueSumit}
        />
        <Col xl={12}>
          <SubSectionHeading heading="How much do you need?" />
        </Col>
        <Col sm={12} md={6}>
          <Select
            Title="Loan Amount"
            isPlaceHolder
            placeholder="Select Loan Amount"
            loading={StartUp && StartUp.loanAmountIsFetching}
            options={StartUp ? StartUp.loanAmountResponse : []}
            onChange={handleChange}
            onBlur={handleBlur}
            value={loanAmount}
            name="loanAmount"
            errorMessage={touched.loanAmount ? errors.loanAmount : ""}
          />
        </Col>
        <Col sm={12} md={6}>
          <LoanSelect
            isPlaceHolder
            placeholder="Select Reason of Loan"
            onChange={handleChange}
            onBlur={handleBlur}
            value={loanReason}
            name="loanReason"
            errorMessage={touched.loanReason ? errors.loanReason : ""}
          />
        </Col>
        <Col xl={12}>
          <Divider />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <SubSectionHeading heading="About You" />
        </Col>
        <Col sm={12} md={6}>
          <TitleSelect
            onChange={handleChange}
            onBlur={handleBlur}
            value={title}
            name="title"
            errorMessage={touched.title ? errors.title : ""}
          />
          <FirstName
            onChange={handleChange}
            onBlur={handleBlur}
            value={firstName}
            name="firstName"
            errorMessage={touched.firstName ? errors.firstName : ""}
          />
          <MiddleName
            onChange={handleChange}
            onBlur={handleBlur}
            value={middleName}
            name="middleName"
            errorMessage={touched.middleName ? errors.middleName : ""}
          />
          <LastName
            onChange={handleChange}
            onBlur={handleBlur}
            value={lastName}
            name="lastName"
            errorMessage={touched.lastName ? errors.lastName : ""}
          />
        </Col>
        <Col sm={12} md={6}>
          <MobileNoField
            onChange={handleChange}
            onBlur={handleBlur}
            value={mobilePhone}
            name="mobilePhone"
            errorMessage={touched.mobilePhone ? errors.mobilePhone : ""}
          />
          <EmailField
            onChange={handleChange}
            onBlur={handleBlur}
            value={emailAddress}
            name="emailAddress"
            errorMessage={touched.emailAddress ? errors.emailAddress : ""}
          />
          <DobInput {...props} />
          <TermsCheckBox
            onChange={handleChange}
            onBlur={handleBlur}
            checked={acceptsPrivacyPolicy}
            name="acceptsPrivacyPolicy"
            setFieldValue={setFieldValue}
            errorMessage={
              touched.acceptsPrivacyPolicy ? errors.acceptsPrivacyPolicy : ""
            }
          />
        </Col>
        <Col xl={12}>
          <Divider />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <SubSectionHeading heading="Your Current Address" />
        </Col>
        <Col xl={12}>
          <AddressField {...props} />
        </Col>
        <Col xl={12}>
          <Divider />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <SubSectionHeading heading="Your Income" />
        </Col>
        <Col sm={12} md={6}>
          <SelectIncomeFrequency
            onChange={handleChange}
            onBlur={handleBlur}
            value={incomeFrequency}
            name="incomeFrequency"
            errorMessage={touched.incomeFrequency ? errors.incomeFrequency : ""}
          />
        </Col>
        <Col sm={12} md={6}>
          <IncomeField
            onChange={handleChange}
            onBlur={handleBlur}
            value={totalIncome}
            incomeFrequency={incomeFrequency}
            name="totalIncome"
            errorMessage={touched.totalIncome ? errors.totalIncome : ""}
          />
        </Col>
        <Col sm={12} md={6}>
          <ReferralCheckbox
            onClick={handleChange}
            onBlur={handleBlur}
            checked={referralConsent}
            name="referralConsent"
            errorMessage={touched.referralConsent ? errors.referralConsent : ""}
          />
        </Col>
        <Col sm={12} md={6}>
          <Button
            disabled={!isValid || !touched.loanAmount || isFetching}
            buttonProps={{
              type: "button",
              onClick: handleSumit
            }}
          >
            {isFetching ? <Loader type="light" label="processing..." /> : "Go"}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Start;
