import React, { useState } from "react";
import { useSelector } from "react-redux";
import Wrapper from "./Styles/referralConsent.styles";

import ReferralForm from "../../../PersonalLoan/referralForm";

import CheckBox from "../../../../components/uielements/checkBox";

const ReferralConsent = () => {
  const { initialValue, loanFormResponse } = useSelector(
    state => state.loanForm
  );

  let formValue = initialValue;
  if (loanFormResponse != null) {
    formValue = { ...loanFormResponse.value };
  }

  const [referralConsent, setReferralConsent] = useState(
    formValue.referralConsent
  );

  const handleCheckBox = () => {
    setReferralConsent(!referralConsent);
  };

  const getFormConfig = () => {
    return {
      values: formValue
    };
  };

  const referralConsentContentMessage =
    "Given we are unable to offer a loan today, we may be able to refer you to other credit providers and alternative service providers as described in our Privacy Policies, who may be able to offer you an alternative finance option. Do you give us approval to do this and agree to sending your contact details, name and financial information to these providers?";

  return (
    <Wrapper>
      <div className="referral-consent">
        <div className="referral-consent-message">
          We can refer you to another lender who may be able to assist you.
        </div>
        <div className="referral-consent-padding"></div>
        <div className="referral-consent-content">
          {
            <CheckBox
              onChange={handleCheckBox}
              checked={referralConsent}
              name="referralConsent"
            >
              <strong>Referral Consent</strong>: {referralConsentContentMessage}
            </CheckBox>
          }
          {referralConsent && (
            <div className="referral-consent-form-wrapper">
              <ReferralForm {...getFormConfig()} />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default ReferralConsent;
