import React from "react";
import { Row, Col } from "react-grid-system";

import SectionHeading from "../../components/uielements/sectionHeading";
import Divider from "../../components/uielements/divider";
import Paper from "../../components/uielements/paper";
import Accordian from "../../components/uielements/accordian";
import WhyLoanText from "./components/whyLoanText";
import StartForm from "./components/steps/formStart";
import GeneralGiving from "./components/steps/generalGiving";
import BankStatement from "./components/steps/formBankStatement";
import Finally from "./components/steps/formFinally";

import SubSectionHeading from "../../components/uielements/subSectionHeading";
import Wrapper from "./loanForm.styles";

export default function LoanForm({ ...props }) {
  const { step, ...rest } = props;
  return (
    <Wrapper>
      <form
        noValidate
        autoComplete="off"
        className="register-form"
        onSubmit={props.handleSubmit}
      >
        {step === 1 && (
          <Paper>
            <div className="content-wrapper">
              <Row>
                <Col>
                  <SectionHeading
                    heading="Personal Loan Application"
                    subheading={
                      <span>
                        It only takes a few minutes to get an outcome.
                        <br /> Call us on{" "}
                        <a href="tel:+1300324746">1300 324 746</a> if you have
                        any problems completing this form.
                      </span>
                    }
                  />
                  <Accordian title="Are you eligible to apply?">
                    <WhyLoanText />
                  </Accordian>
                  <StartForm {...rest} />
                </Col>
              </Row>
            </div>
          </Paper>
        )}
        {step === 2 && (
          <Paper>
            <div className="content-wrapper">
              <Row>
                <Col>
                  <SectionHeading
                    heading="Bank Statement"
                    headingClass=""
                    subheading={
                      <span>
                        Please call us on{" "}
                        <a href="tel:+1300324746">1300 324 746</a> if you have
                        any queries completing this application.
                      </span>
                    }
                  />
                  <Divider />
                </Col>
              </Row>
              <Row>
                <Col>
                  <SubSectionHeading
                    heading="Your Bank Account"
                    subheading={[
                      <span>
                        <span className="left-align">
                          In order to assess your ability to repay your loan, we
                          are required to view 90 days of banking history. The
                          simplest and quickest way to do this is through
                          uploading your statement using our tool below.
                        </span>
                        ,
                        <br />,
                        <span className="left-align">
                          <span className="label">Note:</span> we do not see
                          your internet banking details and do not gain access
                          to your bank account.
                        </span>
                      </span>
                    ]}
                  />
                  <BankStatement {...props} />
                </Col>
              </Row>
            </div>
          </Paper>
        )}
        {step === 3 && (
          <Paper>
            <div className="content-wrapper">
              <Row>
                <Col>
                  <SectionHeading
                    heading="Additional Information"
                    subheading={
                      <span>
                        Please call us on{" "}
                        <a href="tel:+1300324746">1300 324 746</a> if you have
                        any queries completing this application.
                      </span>
                    }
                  />
                  <Divider />
                  <GeneralGiving {...props} />
                </Col>
              </Row>
            </div>
          </Paper>
        )}
        {step === 4 && (
          <Paper>
            <div className="content-wrapper">
              <Row>
                <Col>
                  <Divider />
                  <Finally {...props} />
                </Col>
              </Row>
            </div>
          </Paper>
        )}
      </form>
    </Wrapper>
  );
}
