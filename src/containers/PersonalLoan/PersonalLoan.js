import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { Row, Col } from "react-grid-system";
import startUpActions from "../../redux/startup/actions";

import loanFormActions from "../../redux/loanForm/actions";
import TopHeader from "../../components/uielements/topHeader";
import BreadCrum from "../../components/uielements/breadCrum";
import Footer from "../../components/uielements/footer";

import Wrapper from "./PersonalLoan.styles";
import LoanForm from "./loanForm";
import {
  StartSchema,
  BankStatementSchema,
  GeneralGivingSchema,
  FinallySchema
} from "./components/steps/validationSchema";
// import history from '../../utils/history';
import { push } from 'connected-react-router'
import { PUBLIC_ROUTE } from "../../route.constants";
import TagManager from 'react-gtm-module'

export default function PersonalLoan({ ...props }) {
  const { step, initialValue } = useSelector(state => state.loanForm);
  const themeName = useSelector(state => state.StartUp.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    // const { location } = props.history;
    // const pageUrl = location.pathname + location.search;

    const tagManagerArgs = {
      dataLayer: {
        pageUrl: ""
      }
    }
    TagManager.dataLayer(tagManagerArgs)
  }, [])
  console.log(props)
  useEffect(() => {
    dispatch(startUpActions.loanAmountRequest());
    dispatch(startUpActions.fillForm());
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
      if (step < STEPS.length)
        dispatch(loanFormActions.setStep(step + 1))
    }
  };

  const STEPS = [
    { step: 1, label: "Start", active: true, path: PUBLIC_ROUTE.LANDING },
    { step: 2, label: "Bank Statement", active: true, path: PUBLIC_ROUTE.BANK_STATEMENT_PAGE },
    { step: 3, label: "General Living", active: true, path: PUBLIC_ROUTE.GENERAL_LIVING_PAGE },
    { step: 4, label: "Finally", active: true, path: PUBLIC_ROUTE.FINALLY_PAGE }
  ];

  const onStepChange = (item) => {
    dispatch(loanFormActions.setStep(item.step))
    debugger
    push(item.path)
  }

  return (
    <Wrapper>
      <Row>
        <Col lg={12}>
          <TopHeader currentTheme={themeName} />
        </Col>
        <Col lg={12}>
          <BreadCrum
            steps={STEPS}
            activeStep={step}
            changeStep={onStepChange}
          />
        </Col>
      </Row>
      {step === 1 && (
        <Formik
          initialValues={initialValue}
          validationSchema={StartSchema}
          enableReinitialize
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
          validationSchema={BankStatementSchema}
          enableReinitialize
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
          validationSchema={GeneralGivingSchema}
          enableReinitialize
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
          validationSchema={FinallySchema}
          enableReinitialize
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
