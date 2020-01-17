import React from "react";
import Wrapper from "./accordian.styles";
export default function Accordian({ ...props }) {
  return (
    <Wrapper>
      <section className="UserInputBlock-Container">
        <title className="UserInputBlock-Label">
          <p className="Label-Text">Are you eligible to apply?</p>
          <p className="Label-Icon">-</p>
        </title>
        <section className="content-show">
          <section className="pageOne-ApplicationInformation-Section">
            <section className="listBox-Container">
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
            </section>
            <section className="listBox-Container">
              <ul>
                <p className="listBox-Title">We cannot assist you if:</p>
                <li className="listBox-Item">
                  <span className="listBox-text">
                    Your income is solely from Centrelink
                  </span>
                </li>
                <li className="listBox-Item">
                  <span className="listBox-text">
                    You've entered into bankruptcy (including Part IX) within
                    the last 12 months
                  </span>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
    </Wrapper>
  );
}
