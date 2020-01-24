import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import { Row, Col } from "react-grid-system";

import actions from "../../redux/startup/actions";
import Button from "../../components/uielements/button";
import Select from "../../components/uielements/select/select";
import LoanSelect from "./components/selectForLoanResoans";
import TitleSelect from "./components/selectForNamePrefix";
import TopHeader from "../../components/uielements/topHeader";
import BreadCrum from "../../components/uielements/breadCrum";
import SectionHeading from "../../components/uielements/sectionHeading";
import Paper from "../../components/uielements/paper";
import Accordian from "../../components/uielements/accordian";
import MobileNoField from "./components/mobileNoField";
import FirstName from "./components/firstName";
import MiddleName from "./components/middleName";
import LastName from "./components/lastName";
import EmailField from "./components/emailField";
import DobInput from "./components/dobField";
import TermsCheckBox from "./components/termsCheckBox";
import SelectIncomeFrequency from "./components/selectIncomeFrequency";
import IncomeField from "./components/incomeField";
import RefferalCheckbox from "./components/refferalCheckbox";
import AddressField from "./components/addressField";
import WhyLoanText from "./components/whyLoanText";

import Wrapper from "./PersonalLoan.styles";
import Divider from "../../components/uielements/divider";
export default function ParsonalLoan({ ...props }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.loanAmountRequest());
  }, [dispatch]);
  const StartUp = useSelector(state => state.StartUp);

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
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {props => (
              <form onSubmit={props.handleSubmit}>
                <Row>
                  <Col xl={12}>
                    <SectionHeading heading="How much do you need?" />
                  </Col>
                  <Col sm={12} md={6}>
                    <Select
                      defaultValue={
                        StartUp &&
                        StartUp.loanAmountResponse &&
                        StartUp.loanAmountResponse[0] &&
                        StartUp.loanAmountResponse[0].value
                      }
                      Title="Loan Amount"
                      loading={StartUp && StartUp.loanAmountIsFetching}
                      options={StartUp ? StartUp.loanAmountResponse : []}
                      onChange={item => {
                        console.log(item);
                      }}
                    />
                  </Col>
                  <Col sm={12} md={6}>
                    <LoanSelect
                      onChange={item => {
                        console.log(item);
                      }}
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
                      onChange={item => {
                        console.log(item);
                      }}
                    />
                  </Col>
                  <Col sm={12} md={6}>
                    <MobileNoField />
                  </Col>
                  <Col sm={12} md={6}>
                    <FirstName />
                  </Col>
                  <Col sm={12} md={6}>
                    <MiddleName />
                  </Col>
                  <Col sm={12} md={6}>
                    <LastName />
                  </Col>
                  <Col sm={12} md={6}>
                    <EmailField />
                  </Col>
                  <Col sm={12} md={6}>
                    <DobInput />
                  </Col>
                  <Col sm={12} md={6}>
                    <TermsCheckBox />
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
                    <AddressField />
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
                    <SelectIncomeFrequency />
                  </Col>
                  <Col sm={12} md={6}>
                    <IncomeField />
                  </Col>
                  <Col sm={12} md={6}>
                    <RefferalCheckbox />
                  </Col>
                  <Col sm={12} md={6}>
                    <Button type="submit" disabled>
                      Go
                    </Button>
                  </Col>
                </Row>
              </form>
            )}
          </Formik>
        </Row>
      </Paper>
    </Wrapper>
  );
}
