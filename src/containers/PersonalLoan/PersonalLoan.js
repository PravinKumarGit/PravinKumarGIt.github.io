import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/startup/actions";
import Input from "../../components/uielements/input";
import Select from "../../components/uielements/select/select";
import LoanSelect from "./components/selectForLoanResoans";
import TitleSelect from "./components/selectForNamePrefix";
import TopHeader from "../../components/uielements/topHeader";
import BreadCrum from "../../components/uielements/breadCrum";
import PageTopHeading from "../../components/uielements/pageTopHeading";
import Paper from "../../components/uielements/paper";
import Accordian from "../../components/uielements/accordian";
import DobInput from "./components/dobField";
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

  console.log(loanAmountResponse, Input, Select, "loanAmount");
  return (
    <Wrapper>
      <TopHeader />
      <BreadCrum />
      <Paper>
        <PageTopHeading
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
        <Input
          title="Email"
          preFix={<span>@</span>}
          placeholder="Email"
          type="email"
        />
        <Input
          title="Email"
          errorMessage="This is required"
          preFix={<span>@</span>}
          placeholder="Email"
          type="email"
        />
        <DobInput
          title="Date of Birth"
          value={new Date()}
          onChange={item => {
            console.log(item);
          }}
        />
        <TitleSelect
          onChange={item => {
            console.log(item);
          }}
        />

        <LoanSelect
          onChange={item => {
            console.log(item);
          }}
        />
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
          errorMessage="This field is required."
        />
      </Paper>
    </Wrapper>
  );
}
