import React, { useEffect, useState } from "react";
import {
  useDispatch, useSelector
  // , useSelector
} from "react-redux";
import { Formik } from "formik";
import { Row, Col } from "react-grid-system";

import loanFormActions from "../../redux/loanForm/actions";
import startUpActions from "../../redux/startup/actions";
import TopHeader from "../../components/uielements/topHeader";
import BreadCrum from "../../components/uielements/breadCrum";

import Footer from "../../components/uielements/footer";

import Wrapper from "./PersonalLoan.styles";
import LoanForm from "./loanForm";
import validationSchema from "./components/steps/validationSchema";

export default function PersonalLoan({ ...props }) {
  const { step } = useSelector(state => state.loanForm);
  // const { isFetching, loanFormResponse, loanFormError } = useSelector(
  //   state => state.loanForm
  // );
  const values = {
    loanAmount: "",
    reasonOfLoan: "",
    title: "",
    mobileNumber: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    dateOfBirth: { day: "", month: "", year: "" },
    terms: false,
    unitNumber: "",
    streetNumber: "",
    suburb: "",
    street: "",
    state: "",
    postCode: "",
    incomeFrequency: "",
    totalIncome: "",
    refferalConsent: false,
    //step 2
    bankStatementReferralCode: "",
    // step 3
    occupation: "",
    employmentBasis: "",
    employerName: "",
    businessName: "",
    employerPhone: "",
    dateStarted: { day: 1, month: "", year: "" },
    dateStartedAtCurrentAddress: { day: 1, month: "", year: "" },
    livingSituation:"",
    numberOfDependents:"",
    residentialStatus: ""
  };
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startUpActions.loanAmountRequest());
  }, [dispatch]);
  const handleSubmit = (value, actions) => {
    const { setSubmitting } = actions;
    setSubmitting(true);
    try {
      setSubmitting(false);
      dispatch(loanFormActions.postLoanFormRequest({ value, step }));
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
    console.log(values, actions, "Form values");
  };
  useEffect(() => {
    window.addEventListener("message", messageEvent => {
      const bankStatementMessageId = "Bank_Statements_Request_ID";
      if (
        messageEvent &&
        messageEvent.data &&
        messageEvent.data.messageId === bankStatementMessageId
      ) {
        console.log(messageEvent.data.value, "code");
      }
    });
  }, []);
  const STEPS = [
    { step: 1, label: "Start", active: true },
    { step: 2, label: "Bank Statement", active: true },
    { step: 3, label: "General Living", active: true },
    { step: 4, label: "Finally", active: true }
  ];
  return (
    <Wrapper>
      <Row>
        <Col lg={12}>
          <TopHeader />
        </Col>
        <Col lg={12}>
          <BreadCrum
            steps={STEPS}
            activeStep={step}
            changeStep={step => dispatch(loanFormActions.setStep(step))}
          />
        </Col>
      </Row>
      <Formik
        initialValues={values}
        validationSchema={validationSchema}
        validateOnChange
        validateOnBlur
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {props => <LoanForm {...props} step={step} />}
      </Formik>
      <Footer />
    </Wrapper>
  );
}
