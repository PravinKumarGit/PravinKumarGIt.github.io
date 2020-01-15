import React from "react";

import Wrapper from "./input.styles";
export default function Input({ ...props }) {
  const { title, preFix, errorMessage, ...rest } = props;
  return (
    <Wrapper>
      <section class="textBox">
        <section class="textBox-Label-Container">
          {title && <label class="textBox-Label">{title}</label>}
        </section>
        <section class={`textBox-Input ${errorMessage && "required"}`}>
          {preFix && (
            <section class={`textBox-Icon ${errorMessage && "iconRequired"} `}>
              {preFix}
            </section>
          )}
          <input {...rest} />
        </section>
        {errorMessage && <p class="message"> {errorMessage} </p>}
      </section>
    </Wrapper>
  );
}
