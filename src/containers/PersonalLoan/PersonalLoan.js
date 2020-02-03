import React, { useEffect } from "react";
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

import Wrapper from "./PersonalLoan.styles";
import LoanForm from "./components/LoanForm";
import validationSchema from "./components/validationSchema";
export default function ParsonalLoan({ ...props }) {
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
  //   loanAmount: "1000",
  //   reasonOfLoan: "Household Bills",
  //   title: "Mrs",
  //   mobileNumber: "0421323123",
  //   firstName: "Testing",
  //   middleName: "Test",
  //   lastName: "Test",
  //   email: "abc@abc.com",
  //   dateOfBirth: { day: "1", month: "Mar", year: "1904" },
  //   terms: true,
  //   unitNumber: "AS1234",
  //   streetNumber: "9599",
  //   suburb: "Melbourne Airport",
  //   street: "S Centre Rd",
  //   state: "VIC",
  //   postCode: "3045",
  //   incomeFrequency: "Fortnightly",
  //   totalIncome: "123",
  //   refferalConsent: false
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
  return (
    <Wrapper>
      <Row>
        <Col lg={12}>
          <TopHeader />
        </Col>
        <Col lg={12}>
          <BreadCrum />
        </Col>
      </Row>
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
    </Wrapper>
  );
}
