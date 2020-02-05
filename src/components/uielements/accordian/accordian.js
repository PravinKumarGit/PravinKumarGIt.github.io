import React, { useState } from "react";
import Wrapper from "./accordian.styles";
export default function Accordian({ ...props }) {
  const { title, children } = props;
  const [openIndex, setOpenIndex] = useState(null);
  const updateOpenIndex = index => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <Wrapper>
      <div className="UserInputBlock-Container">
        <div
          className="UserInputBlock-Label"
          onClick={() => updateOpenIndex(0)}
        >
          <p className="Label-Text">{title}</p>
          <p className="Label-Icon">{openIndex === 0 ? "+" : "-"}</p>
        </div>
        <div className={`content-${openIndex === 0 ? "show" : "hide"}`}>
          {children}
        </div>
      </div>
    </Wrapper>
  );
}
