import React from "react";

import Wrapper from "./verification.styles";
export default function Verification({ ...props }) {
  const {
    title,
  } = props;
  return (
    <Wrapper>
      <div className="verification">
        <p>{title}</p>
        <div className="verification-options">
          <div className="option-container">
            <input type="radio" id="agree" name="agree" value="agree" />
            <label for="agree">I Agree</label>
          </div>
          <div>
            <input type="radio" id="notAgree" name="agree" value="notAgree" />
            <label for="notAgree">I Do Not Agree</label>
          </div>
        </div>
      </div>
    </Wrapper >
  );
}
