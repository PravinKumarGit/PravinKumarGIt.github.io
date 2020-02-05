import React from "react";

import Wrapper from "./footer.styles";
export default function Select({ ...props }) {
  return (
    <Wrapper>
      <div className="Footer-Container">
        <p className="ApprovalText">
          All applications are subject to approval and will be assessed
          separately by reference to the applicants individual circumstances.
        </p>
        <p className="AcnAcl">ACN 134 369 574 | ACL 387995</p>
      </div>
    </Wrapper>
  );
}
