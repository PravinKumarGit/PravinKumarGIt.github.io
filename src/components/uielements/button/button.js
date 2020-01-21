import React from "react";

import Wrapper from "./button.styles";
export default function Select({ ...props }) {
  const { buttonText, buttonProps, children, disabled } = props;
  return (
    <Wrapper>
      <section className="button-Container">
        <button
          className={`button-Button ${disabled ? "disabled" : ''}`}
          {...buttonProps}
        >
          {buttonText}
          {children}
          {!buttonText && !children ? "Button" : null}
        </button>
      </section>
    </Wrapper>
  );
}
