import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import { Row, Col } from "react-grid-system";

import actions from "../../redux/startup/actions";
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
    name: "",
    surname: "",
    email: "",
    countryCode: "+31",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.loanAmountRequest());
  }, [dispatch]);
  const StartUp = useSelector(state => state.StartUp);
  const handleSubmit = (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
    console.log(values, "Form values");
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
            render={props => <LoanForm {...props} />}
            initialValues={values}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={true}
            onSubmit={(values, actions) => handleSubmit(values, actions)}
          />
        </Row>
      </Paper>
    </Wrapper>
  );
}
