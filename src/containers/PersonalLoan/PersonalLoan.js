import React, { useEffect, useState } from "react";
import {
  useDispatch, useSelector
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
import { LoanFormGet } from "../../models/loanForm";

export default function PersonalLoan({ ...props }) {
  const { step } = useSelector(state => state.loanForm);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startUpActions.loanAmountRequest());
  }, [dispatch]);
  const handleSubmit = (values, actions) => {
    const { setSubmitting } = actions;
    setSubmitting(true);
    try {
      setSubmitting(false);
      dispatch(loanFormActions.postLoanFormRequest({ values, step }));
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
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
  const initialValue = new LoanFormGet({ values: {}, step });
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
       {step === 1 && (
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          validateOnChange
          validateOnBlur
          onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
          {props => <LoanForm {...props} step={step} />}
        </Formik>
      )}
       {step === 2 && (
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          validateOnChange
          validateOnBlur
          onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
          {props => <LoanForm {...props} step={step} />}
        </Formik>
      )}
       {step === 3 && (
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          validateOnChange
          validateOnBlur
          onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
          {props => <LoanForm {...props} step={step} />}
        </Formik>
      )}
       {step === 4 && (
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          validateOnChange
          validateOnBlur
          onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
          {props => <LoanForm {...props} step={step} />}
        </Formik>
      )}
      <Footer />
    </Wrapper>
  );
}
