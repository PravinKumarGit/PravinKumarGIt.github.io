import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-grid-system";

import Button from "../../../components/uielements/button";
import Select from "../../../components/uielements/select/select";
import Divider from "../../../components/uielements/divider";
import actions from "../../../redux/startup/actions";
import SectionHeading from "../../../components/uielements/sectionHeading";
import LoanSelect from "./selectForLoanResoans";
import TitleSelect from "./selectForNamePrefix";
import MobileNoField from "./mobileNoField";
import FirstName from "./firstName";
import MiddleName from "./middleName";
import LastName from "./lastName";
import EmailField from "./emailField";
import DobInput from "./dobField";
import TermsCheckBox from "./termsCheckBox";
import SelectIncomeFrequency from "./selectIncomeFrequency";
import IncomeField from "./incomeField";
import RefferalCheckbox from "./refferalCheckbox";
import AddressField from "./addressField";

const PersonalLoanForm = props => {
  const {
    values: {
      name,
      surname,
      email,
      countryCode,
      phoneNumber,
      password,
      confirmPassword
    },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    setFieldValue,
    setSubmitting,
    setErrors,
    validateForm,
    countryCodes
  } = props;

  let options = [];
  if (!!countryCodes && countryCodes.length > 0 && options.length === 0) {
    if (countryCodes.length > 0)
      countryCodes.forEach(country => {
        options.push({
          value: country.code,
          label: `(${country.code})\t${country.countryName}`
        });
      });
  }

  /* =========== State =========== */
  const [showPassword, setShowPassword] = useState(false);
  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  const handleSelectChange = value => {
    setFieldValue('countryCode', value);
    setFieldTouched('countryCode', true, false);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loanAmountRequest());
  }, [dispatch]);
  const StartUp = useSelector(state => state.StartUp);
  return (
    <form
      noValidate
      autoComplete="off"
      className="register-form"
      onSubmit={props.handleSubmit}
    >
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
  );
};

export default PersonalLoanForm;
