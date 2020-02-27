import React, { useEffect, useState } from "react";

import Button from "../../../../components/uielements/button";

import Loader from "../../../../components/utility/loader";

const BankStatement = ({ ...props }) => {
  const {
    values: { bankStatementReferralCode },
    submitForm } = props;

  const [iframeLoading, setIframeLoading] = useState(true);
  useEffect(() => {
    window.addEventListener("message", function (messageEvent) {
      const bankStatementMessageId = "Bank_Statements_Request_ID";
      if (
        messageEvent &&
        messageEvent.data &&
        messageEvent.data.messageId === bankStatementMessageId
      ) {
        props.setFieldValue(
          "bankStatementReferralCode",
          messageEvent.data.value
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="verifyBankDetails-Container">
        <iframe
          id="fgf-bank-frame"
          src="https://bs.fgfdev.com.au"
          title="bankFrame"
          onLoad={() => {
            setIframeLoading(false);
          }}
        ></iframe>
        <div className="loaderBackground">
          <Loader loading={iframeLoading} />
        </div>
      </div>
      <div className="next-buton-container">
        <div style={{ width: "48%" }} >
          <Button
            disabled={!bankStatementReferralCode}
            buttonProps={{
              type: "button",
              onClick: submitForm
            }}
          >
            Next
            </Button>
        </div>
      </div>
    </>
  );
};

export default BankStatement;
