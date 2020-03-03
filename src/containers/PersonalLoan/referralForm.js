import React, { useEffect } from "react";
import { Row, Col } from "react-grid-system";

import Wrapper from "./referralForm.styles";

import environmentSettings from "../../constants/environmentSettings";

const dateObjectIsNotEmpty = dateObject => {
  return (
    dateObject.year !== "" && dateObject.month !== "" && dateObject.day !== ""
  );
};

const initLeadMarketReferralForm = formConfig => {
  const {
    values: {
      accountExternalId,
      firstName,
      lastName,
      dateOfBirth,
      mobilePhone,
      emailAddress,
      loanAmount,
      loanReason,
      businessName,
      acceptsPrivacyPolicy
    },
    scriptId
  } = formConfig;

  const mlmLoaderElement = document.getElementById(scriptId);

  const refValue = accountExternalId
    ? `loanapplication-${accountExternalId}`
    : Math.random() * 999999;

  const dobValue = dateObjectIsNotEmpty(dateOfBirth)
    ? new Date(dateOfBirth.year, dateOfBirth.month, dateOfBirth.day)
        .toISOString()
        .split("T")[0]
    : null;

  const leadMarketConfig = {
    ref: "",
    csid: "",
    fn: "",
    sn: "",
    mob: "",
    e: "",
    a: "",
    emp: "",
    la: "",
    lr: "",
    tok: "",
    aff: environmentSettings.leadMarketAffiliateCode,
    mode: "embedded",
    "hide-tc": "",
    test_sale_outcome: environmentSettings.environment !== "production" ? 4 : 1
  };

  const config = Object.assign(leadMarketConfig, {
    ref: refValue,
    fn: firstName,
    sn: lastName,
    dob: dobValue,
    mob: mobilePhone,
    e: emailAddress,
    a: "", // streetName
    emp: businessName || "",
    la: loanAmount,
    lr: loanReason,
    "hide-tc": acceptsPrivacyPolicy
  });

  const event = new CustomEvent("mlm.init", { detail: config });

  mlmLoaderElement.dispatchEvent(event);
};

const ReferralForm = props => {
  const scriptConfig = {
    scriptId: "mlm-loader-1-target",
    dataTargetId: "mlm-loader-1"
  };
  const { values } = props;

  useEffect(() => {
    let script = document.getElementById(scriptConfig.scriptId);
    if (script != null) {
      script.remove();
    }

    script = document.createElement("script");
    script.onload = () => {
      const formConfig = Object.assign({}, scriptConfig, { values });
      initLeadMarketReferralForm(formConfig);
    };

    script.setAttribute("id", scriptConfig.scriptId);
    script.setAttribute("data-target", scriptConfig.dataTargetId);
    script.setAttribute("data-include-url-param", "true");
    script.setAttribute("data-defer", "true");
    script.setAttribute("data-full-screen", "true");

    document.body.appendChild(script);

    script.setAttribute(
      "src",
      `https://static.creditsense.com.au/iframe/mlm-loader.js?mode=embedded`
    );
  }, [scriptConfig, values]);

  return (
    <Wrapper>
      <Row>
        <Col>
          <div className="referral-form" id={scriptConfig.dataTargetId} />
          <div className="referral-form-end-padding"></div>
          <div className="referral-form-disclaimer">
            Fair Go Finance may receive a payment or benefit from Lead Market
            Australia for this referral at no cost to you.
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ReferralForm;
