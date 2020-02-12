import React from "react";
import { Row, Col } from "react-grid-system";

import SectionHeading from "../../components/uielements/sectionHeading";
import Divider from "../../components/uielements/divider";
import Paper from "../../components/uielements/paper";
import Accordian from "../../components/uielements/accordian";
import WhyLoanText from "./components/whyLoanText";
import StartForm from "./components/formStart";

import SubSectionHeading from "../../components/uielements/subSectionHeading";
import { useEffect } from "react";
export default function LoanForm({ ...props }) {
  const { step, ...rest } = props;

  useEffect(() => {
    window.addEventListener("message", function(messageEvent) {
      const bankStatementMessageId = "Bank_Statements_Request_ID";
      if (
        messageEvent &&
        messageEvent.data &&
        messageEvent.data.messageId === bankStatementMessageId
      ) {
        rest.setFieldValue(
          "bankStatementReferralCode",
          messageEvent.data.value
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(props, "LoanForm");
  return (
    <>
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
              <StartForm {...rest} />
              <Divider />
            </Col>
          </Row>
        </Paper>
      )}
      {step === 2 && (
        <Paper>
          <Row>
            <Col>
              <SectionHeading
                heading="Bank Statement"
                headingClass=""
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
              <SubSectionHeading
                heading="Your Bank Account"
                subheading={[
                  <span>
                    <span className="left-align">
                      In order to assess your ability to repay your loan, we are
                      required to view 90 days of banking history. The simplest
                      and quickest way to do this is through uploading your
                      statement using our tool below.
                    </span>
                    ,
                    <br />,
                    <span className="left-align">
                      <span className="label">Note:</span> we do not see your
                      internet banking details and do not gain access to your
                      bank account.
                    </span>
                  </span>
                ]}
              />
              <div className="verifyBankDetails-Container">
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
    </>
  );
}
