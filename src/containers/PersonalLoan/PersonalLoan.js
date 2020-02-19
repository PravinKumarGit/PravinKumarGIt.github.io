import React, { useEffect, useState } from "react";
import {
  useDispatch
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
import { LoanFormGet } from "../../models/loanForm";

export default function ParsonalLoan({ ...props }) {
  const [step, setStep] = useState(1);

  // const values = {
  //   loanAmount: "1000",
  //   reasonOfLoan: "Household Bills",
  //   title: "Mrs",
  //   mobileNumber: "0421323123",
  //   firstName: "Testing",
  //   middleName: "Test",
  //   lastName: "Test",
  //   email: "abc@abc.com",
  //   dateOfBirth: { day: "01", month: "12", year: "2000" },
  //   terms: true,
  //   unitNumber: "AS1234",
  //   streetNumber: "9599",
  //   suburb: "Melbourne Airport",
  //   street: "S Centre Rd",
  //   state: "VIC",
  //   postCode: "3045",
  //   incomeFrequency: "Fortnightly",
  //   totalIncome: "123",
  //   referralConsent: true,
  //   bankStatementReferralCode: ""
  // };
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
            changeStep={step => setStep(step)}
          />
        </Col>
      </Row>
      <Formik
        initialValues={new LoanFormGet({ values: {}, step })}
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
