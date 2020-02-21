import React, { useEffect } from "react";
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
import RefferalCheckbox from "../refferalCheckbox";
import AddressField from "../addressField";

const Start = props => {
  const {
    values: {
      loanAmount,
      reasonOfLoan,
      title,
      mobileNumber,
      firstName,
      middleName,
      lastName,
      email,
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
    countryCodes
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

  return (
    <>
      <Row>
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
            value={reasonOfLoan}
            name="reasonOfLoan"
            errorMessage={touched.reasonOfLoan ? errors.reasonOfLoan : ""}
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
            value={mobileNumber}
            name="mobileNumber"
            errorMessage={touched.mobileNumber ? errors.mobileNumber : ""}
          />
          <EmailField
            onChange={handleChange}
            onBlur={handleBlur}
            value={email}
            name="email"
            errorMessage={touched.email ? errors.email : ""}
          />
          <DobInput {...props} />
          <TermsCheckBox
            onChange={handleChange}
            onBlur={handleBlur}
            checked={acceptsPrivacyPolicy.toString()}
            name="acceptsPrivacyPolicy"
            errorMessage={touched.acceptsPrivacyPolicy ? errors.acceptsPrivacyPolicy : ""}
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
          <RefferalCheckbox
            onClick={handleChange}
            onBlur={handleBlur}
            checked={referralConsent.toString()}
            name="referralConsent"
            errorMessage={touched.referralConsent ? errors.referralConsent : ""}
          />
        </Col>
        <Col sm={12} md={6}>
          <Button
            type={isFetching ? "button" : "submit"}
            disabled={!isValid || !touched.loanAmount || isFetching}
          >
            {isFetching ? <Loader type="light" label="processing..." /> : "Go"}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Start;
