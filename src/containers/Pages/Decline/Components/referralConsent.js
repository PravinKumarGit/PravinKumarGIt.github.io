import React from "react";
import Wrapper from "./Styles/referralConsent.styles";

import CheckBox from "../../../../components/uielements/checkBox";

export default function ReferralConsent({ ...props }) {
  const { ...checkboxProps } = props;

  const referralConsentContentMessage =
    "Given we are unable to offer a loan today, we may be able to refer you to other credit providers and alternative service providers as described in our Privacy Policies, who may be able to offer you an alternative finance option. Do you give us approval to do this and agree to sneding your contact details, name and financial information to these providers?";

  return (
    <Wrapper>
      <div className="referral-consent">
        <div className="message">
          We can refer you to another lender who may be able to assist you.
        </div>
        <div className="padding"></div>
        <div className="content">
          <CheckBox {...checkboxProps}>
            <strong>Referral Consent</strong>: {referralConsentContentMessage}
          </CheckBox>
        </div>
      </div>
    </Wrapper>
  );
}
