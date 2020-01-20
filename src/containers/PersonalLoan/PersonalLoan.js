import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
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

import Wrapper from "./PersonalLoan.styles";
import Divider from "../../components/uielements/divider";
export default function ParsonalLoan({ ...props }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.loanAmountRequest());
  }, [dispatch]);
  const {
    loanAmountResponse,
    loanAmountIsFetching
    // loanAmountError
  } = useSelector(state => state.StartUp);

  return (
    <Wrapper>
      <TopHeader />
      <BreadCrum />
      <Paper>
        <SectionHeading
          heading="Personal Loan Application"
          subheading={
            <span>
              It only takes a few minutes to get an outcome.
              <br /> Call us on <a href="tel:+1300324746">1300 324 746</a> if
              you have any problems completing this form.
            </span>
          }
        />
        <Accordian />
        <Divider />
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
              <SectionHeading heading="How much do you need?" />
              <Select
                defaultValue={
                  loanAmountResponse &&
                  loanAmountResponse[0] &&
                  loanAmountResponse[0].value
                }
                Title="Loan Amount"
                loading={loanAmountIsFetching}
                options={loanAmountResponse}
                onChange={item => {
                  console.log(item);
                }}
              />

              <LoanSelect
                onChange={item => {
                  console.log(item);
                }}
              />
              <Divider />
              <SectionHeading heading="About You" />
              <TitleSelect
                onChange={item => {
                  console.log(item);
                }}
              />
              <MobileNoField />
              <FirstName />
              <MiddleName />
              <LastName />
              <EmailField />
              <DobInput />
              <TermsCheckBox />
              <Divider />
              <SectionHeading heading="Your Current Address" />
              <AddressField />
              <Divider />
              <SectionHeading heading="Your Income" />
              <SelectIncomeFrequency />
              <IncomeField />
              <RefferalCheckbox />
              <Button type="submit" disabled>
                Go
              </Button>
            </form>
          )}
        </Formik>
      </Paper>
    </Wrapper>
  );
}
