import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-grid-system";

import actions from "../../redux/startup/actions";
import Select from "../../components/uielements/select/select";
import Button from "../../components/uielements/button";
import Loader from "../../components/utility/loader";

import LoanSelect from "./components/selectForLoanResoans";
import FirstName from "./components/firstName";
import LastName from "./components/lastName";
import DobInput from "./components/dobField";
import MobileNoField from "./components/mobileNoField";
import EmailField from "./components/emailField";
import BusinessName from "./components/businessName";

import Wrapper from "./referralForm.styles";

const ReferralForm = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loanAmountRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isFetching } = useSelector(state => state.loanForm);
  const StartUp = useSelector(state => state.StartUp);

  const {
    values: {
      loanAmount,
      loanReason,
      mobilePhone,
      firstName,
      lastName,
      emailAddress,
      businessName
    },
    errors,
    touched,
    handleChange,
    handleBlur,
    isValid,
    setFieldValue
  } = props;

  return (
    <Wrapper>
      <Row>
        <div className="referral-form">
          <div className="referral-form-instructions">
            Let's see if we can help connect you with a suitable lender.
            <br />
            Some of your information is entered below, please{" "}
            <strong>complete the rest and click Continue.</strong>
          </div>
          <div className="referral-form-start-padding"></div>
          <Col>
            <form
              noValidate
              autoComplete="off"
              className="referral-form-form"
              onSubmit={props.handleSubmit}
            >
              <div className="referral-form-section">Personal Details</div>
              <FirstName
                onChange={handleChange}
                onBlur={handleBlur}
                value={firstName}
                name="firstName"
                errorMessage={touched.firstName ? errors.firstName : ""}
              />
              <LastName
                onChange={handleChange}
                onBlur={handleBlur}
                value={lastName}
                name="lastName"
                errorMessage={touched.lastName ? errors.lastName : ""}
              />
              <DobInput {...props} />
              <div className="referral-form-section">Contact Details</div>
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
              <div className="referral-form-section">Loan Information</div>
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
              <BusinessName
                onChange={handleChange}
                onBlur={handleBlur}
                value={businessName}
                name="businessName"
                errorMessage={touched.businessName ? errors.businessName : ""}
              />
              <LoanSelect
                isPlaceHolder
                placeholder="Select Reason of Loan"
                onChange={handleChange}
                onBlur={handleBlur}
                value={loanReason}
                name="loanReason"
                errorMessage={touched.loanReason ? errors.loanReason : ""}
              />
              <Button
                disabled={!isValid || !touched.loanAmount || isFetching}
                buttonProps={{
                  type: isFetching ? "button" : "submit"
                }}
              >
                {isFetching ? (
                  <Loader type="light" label="processing..." />
                ) : (
                  "Continue"
                )}
              </Button>
            </form>
          </Col>
        </div>
      </Row>
    </Wrapper>
  );
};

export default ReferralForm;
