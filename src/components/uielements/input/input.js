import React from "react";

import Wrapper from "./input.styles";
export default function Input({ ...props }) {
  const { title, preFix, errorMessage, ...rest } = props;
  return (
    <Wrapper>
      <section className="textBox">
        <section className="textBox-Label-Container">
          {title && <label className="textBox-Label">{title}</label>}
        </section>
        <section className={`textBox-Input ${errorMessage && "required"}`}>
          {preFix && (
            <section className={`textBox-Icon ${errorMessage && "iconRequired"} `}>
              {preFix}
            </section>
          )}
          <input {...rest} />
        </section>
        {errorMessage && <p className="message"> {errorMessage} </p>}
      </section>
    </Wrapper>
  );
}
