import React from "react";
import Wrapper from "./Styles/options.styles";

import OptionItem from "./optionItem";
import ReferralConsent from "./referralConsent";
import GetCreditFile from "./getCreditFile";

export default function Options() {
  return (
    <Wrapper>
      <div className="options">
        <div className="container">
          <h1 className="title">What are your options?</h1>
          <div className="content">
            <ul>
              <li>
                <OptionItem
                  bulletValue="1"
                  content={ReferralConsent()}
                ></OptionItem>
              </li>
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
}
