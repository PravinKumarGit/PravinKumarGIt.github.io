import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { Row, Col } from "react-grid-system";

import loanFormActions from "../../redux/loanForm/actions";
import startUpActions from "../../redux/startup/actions";
import TopHeader from "../../components/uielements/topHeader";
import BreadCrum from "../../components/uielements/breadCrum";
import SectionHeading from "../../components/uielements/sectionHeading";
import Divider from "../../components/uielements/divider";
import Paper from "../../components/uielements/paper";
import Accordian from "../../components/uielements/accordian";
import WhyLoanText from "./components/whyLoanText";
import Footer from "../../components/uielements/footer";

import Wrapper from "./PersonalLoan.styles";
import LoanForm from "./components/LoanForm";
import validationSchema from "./components/validationSchema";
export default function ParsonalLoan({ ...props }) {
  const [step, setStep] = useState(1);
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
    refferalConsent: false
  };
  // const values = {
  //   loanAmount: "",
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
  //   refferalConsent: true
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
      dispatch(loanFormActions.postLoanFormRequest(values));
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
    console.log(values, actions, "Form values");
  };
  const STEPS = [
    { step: 1, label: "start", active: true },
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
      {step === 1 && (
        <Paper>
          <Row>
            <Col>
              <SectionHeading
                heading="Personal Loan Application"
                subheading={
                  <span>
                    It only takes a few minutes to get an outcome.
                    <br /> Call us on <a href="tel:+1300324746">
                      1300 324 746
                    </a>{" "}
                    if you have any problems completing this form.
                  </span>
                }
              />
              <Accordian title="Are you eligible to apply?">
                <WhyLoanText />
              </Accordian>
              <Divider />
            </Col>
          </Row>
          <Row>
            <Formik
              initialValues={values}
              validationSchema={validationSchema}
              validateOnChange
              validateOnBlur
              onSubmit={(values, actions) => handleSubmit(values, actions)}
            >
              {props => <LoanForm {...props} />}
            </Formik>
          </Row>
        </Paper>
      )}
      {step === 2 && (
        <Paper>
          <div>comming soon...</div>
        </Paper>
      )}
      {step === 3 && (
        <Paper>
          <div>comming soon...</div>
        </Paper>
      )}
      {step === 4 && (
        <Paper>
          <div>comming soon...</div>
        </Paper>
      )}
      <Footer />
    </Wrapper>
  );
}
