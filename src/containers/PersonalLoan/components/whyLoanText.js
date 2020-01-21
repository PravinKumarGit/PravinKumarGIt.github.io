import React from "react";
import Wrapper from "./Styles/whyLoanText.styles";

export default function EmailField({ ...props }) {
  return (
    <Wrapper>
      <div className="pageOne-ApplicationInformation">
        <div className="listBox-Container">
          <ul>
            <p className="listBox-Title">To apply for a loan, you must be:</p>
            <li className="listBox-Item">
              <span className="listBox-text">18 years old or older</span>
            </li>
            <li className="listBox-Item">
              <span className="listBox-text">
                Currently employed (not self-employed)
              </span>
            </li>
          </ul>
        </div>
        <div className="listBox-Container">
          <ul>
            <p className="listBox-Title">We cannot assist you if:</p>
            <li className="listBox-Item">
              <span className="listBox-text">
                Your income is solely from Centrelink
              </span>
            </li>
            <li className="listBox-Item">
              <span className="listBox-text">
                You've entered into bankruptcy (including Part IX) within the
                last 12 months
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}
