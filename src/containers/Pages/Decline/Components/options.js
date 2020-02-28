import React from "react";
import Wrapper from "./Styles/options.styles";

import OptionItem from "./optionItem";
import ReferralConsent from "./referralConsent";
import GetCreditFile from "./getCreditFile";

const Options = () => {
  return (
    <Wrapper>
      <div className="options">
        <div className="options-container">
          <h1 className="options-title">What are your options?</h1>
          <div className="options-padding"></div>
          <div className="options-content">
            <ul>
              <li>
                <OptionItem
                  bulletValue="1"
                  content={ReferralConsent()}
                ></OptionItem>
              </li>
              <div className="options-padding"></div>
              <li>
                <OptionItem
                  bulletValue="2"
                  content={GetCreditFile()}
                ></OptionItem>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Options;
