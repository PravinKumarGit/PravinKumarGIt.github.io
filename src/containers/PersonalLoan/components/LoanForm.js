import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-grid-system";

import Button from "../../../components/uielements/button";
import Select from "../../../components/uielements/select/select";
import Divider from "../../../components/uielements/divider";
import actions from "../../../redux/startup/actions";
import SectionHeading from "../../../components/uielements/sectionHeading";
import LoanSelect from "./selectForLoanResoans";
import TitleSelect from "./selectForNamePrefix";
import MobileNoField from "./mobileNoField";
import FirstName from "./firstName";
import MiddleName from "./middleName";
import LastName from "./lastName";
import EmailField from "./emailField";
import DobInput from "./dobField";
import TermsCheckBox from "./termsCheckBox";
import SelectIncomeFrequency from "./selectIncomeFrequency";
import IncomeField from "./incomeField";
import RefferalCheckbox from "./refferalCheckbox";
import AddressField from "./addressField";

const PersonalLoanForm = props => {
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
      dateOfBirth,
      terms,
      // unitNumber,
      // streetNumber,
      // suburb,
      // street,
      // state,
      // postCode,
      incomeFrequency,
      totalIncome,
      refferalConsent
    },
    errors,
    // touched,
    handleChange,
    handleBlur,
    // isValid,
    // setFieldTouched,
    // setFieldValue,
    // setSubmitting,
    // setErrors,
    // validateForm,
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
  }, [dispatch]);
  const StartUp = useSelector(state => state.StartUp);
  console.log(props, "Form");
  return (
    <form
      noValidate
      autoComplete="off"
      className="register-form"
      onSubmit={props.handleSubmit}
    >
      <Row>
        <Col xl={12}>
          <SectionHeading heading="How much do you need?" />
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
            errorMessage={errors.loanAmount}
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
            errorMessage={errors.reasonOfLoan}
          />
        </Col>
        <Col xl={12}>
          <Divider />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <SectionHeading heading="About You" />
        </Col>
        <Col sm={12} md={6}>
          <TitleSelect
            onChange={handleChange}
            onBlur={handleBlur}
            value={title}
            name="title"
          />
        </Col>
        <Col sm={12} md={6}>
          <MobileNoField
            onChange={handleChange}
            onBlur={handleBlur}
            value={mobileNumber}
            name="mobileNumber"
            errorMessage={errors.mobileNumber}
          />
        </Col>
        <Col sm={12} md={6}>
          <FirstName
            onChange={handleChange}
            onBlur={handleBlur}
            value={firstName}
            name="firstName"
            errorMessage={errors.firstName}
          />
        </Col>
        <Col sm={12} md={6}>
          <MiddleName
            onChange={handleChange}
            onBlur={handleBlur}
            value={middleName}
            name="middleName"
            errorMessage={errors.middleName}
          />
        </Col>
        <Col sm={12} md={6}>
          <LastName
            onChange={handleChange}
            onBlur={handleBlur}
            value={lastName}
            name="lastName"
            errorMessage={errors.lastName}
          />
        </Col>
        <Col sm={12} md={6}>
          <EmailField
            onChange={handleChange}
            onBlur={handleBlur}
            value={email}
            name="email"
            errorMessage={errors.email}
          />
        </Col>
        <Col sm={12} md={6}>
          <DobInput
            onChange={handleChange}
            onBlur={handleBlur}
            value={dateOfBirth}
            name="dateOfBirth"
            errorMessage={errors.dateOfBirth}
          />
        </Col>
        <Col sm={12} md={6}>
          <TermsCheckBox
            onClick={handleChange}
            onBlur={handleBlur}
            chacked={terms}
            name="terms"
            errorMessage={errors.terms}
          />
        </Col>
        <Col xl={12}>
          <Divider />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <SectionHeading heading="Your Current Address" />
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
          <SectionHeading heading="Your Income" />
        </Col>
        <Col sm={12} md={6}>
          <SelectIncomeFrequency
            onClick={handleChange}
            onBlur={handleBlur}
            value={incomeFrequency}
            name="incomeFrequency"
            errorMessage={errors.incomeFrequency}
          />
        </Col>
        <Col sm={12} md={6}>
          <IncomeField
            onChange={handleChange}
            onBlur={handleBlur}
            value={totalIncome}
            name="totalIncome"
            errorMessage={errors.totalIncome}
          />
        </Col>
        <Col sm={12} md={6}>
          <RefferalCheckbox
            onClick={handleChange}
            onBlur={handleBlur}
            chacked={refferalConsent}
            name="refferalConsent"
            errorMessage={errors.refferalConsent}
          />
        </Col>
        <Col sm={12} md={6}>
          <Button type="submit">Go</Button>
        </Col>
      </Row>
    </form>
  );
};

export default PersonalLoanForm;
