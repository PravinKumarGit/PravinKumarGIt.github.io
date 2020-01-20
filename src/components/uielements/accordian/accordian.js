import React, { useState } from "react";
import Wrapper from "./accordian.styles";
export default function Accordian({ ...props }) {
  const [openIndex, setOpenIndex] = useState(null);
  const updateOpenIndex = index => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <Wrapper>
      <div className="UserInputBlock-Container">
        <title
          className="UserInputBlock-Label"
          onClick={() => updateOpenIndex(0)}
        >
          <p className="Label-Text">Are you eligible to apply?</p>
          <p className="Label-Icon">{openIndex === 0 ? "+" : "-"}</p>
        </title>
        <div className={`content-${openIndex === 0 ? "show" : "hide"}`}>
          <div className="pageOne-ApplicationInformation-div">
            <div className="listBox-Container">
              <ul>
                <p className="listBox-Title">
                  To apply for a loan, you must be:
                </p>
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
                    You've entered into bankruptcy (including Part IX) within
                    the last 12 months
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
