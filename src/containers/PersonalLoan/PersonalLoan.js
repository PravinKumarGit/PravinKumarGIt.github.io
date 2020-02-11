import React, { useEffect, useState } from "react";
import { useDispatch
  // , useSelector 
} from "react-redux";
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
import LoanForm from "./components/startForm";
import validationSchema from "./components/validationSchema";
export default function ParsonalLoan({ ...props }) {
  const [step, setStep] = useState(1);
  // const { isFetching, loanFormResponse, loanFormError } = useSelector(
  //   state => state.loanForm
  // );
  // const values = {
  //   loanAmount: "",
  //   reasonOfLoan: "",
  //   title: "",
  //   mobileNumber: "",
  //   firstName: "",
  //   middleName: "",
  //   lastName: "",
  //   email: "",
  //   dateOfBirth: { day: "", month: "", year: "" },
  //   terms: false,
  //   unitNumber: "",
  //   streetNumber: "",
  //   suburb: "",
  //   street: "",
  //   state: "",
  //   postCode: "",
  //   incomeFrequency: "",
  //   totalIncome: "",
  //   refferalConsent: false
  // };
  const values = {
    loanAmount: "1000",
    reasonOfLoan: "Household Bills",
    title: "Mrs",
    mobileNumber: "0421323123",
    firstName: "Testing",
    middleName: "Test",
    lastName: "Test",
    email: "abc@abc.com",
    dateOfBirth: { day: "01", month: "12", year: "2000" },
    terms: true,
    unitNumber: "AS1234",
    streetNumber: "9599",
    suburb: "Melbourne Airport",
    street: "S Centre Rd",
    state: "VIC",
    postCode: "3045",
    incomeFrequency: "Fortnightly",
    totalIncome: "123",
    refferalConsent: true,
    bankStatementReferralCode: ""
  };
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
          <Row>
            <Col>
              <SectionHeading
                heading="Bank Statement"
                subheading={
                  <span>
                    Please call us on <a href="tel:+1300324746">1300 324 746</a>{" "}
                    if you have any queries completing this application.
                  </span>
                }
              />
              <Divider />
            </Col>
          </Row>
          <Row>
            <Col>
              <SectionHeading
                heading="Your Bank Account"
                subheading={[
                  <span>
                    in order to assess your ability to repay your loan, we are
                    required to view 90 days of banking history. The simplest
                    and quickest way to do this is through uploading your
                    statement using our tool below..
                  </span>,
                  <br />,
                  <span>
                    Note: we do not see your internet banking details and do not
                    gain access to your bank account.
                  </span>
                ]}
              />
              <div class="verifyBankDetails-Container">
                <iframe
                  id="fgf-bank-frame"
                  src="https://bs.fgfdev.com.au"
                  title="bankFrame"
                ></iframe>
              </div>
            </Col>
          </Row>
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
