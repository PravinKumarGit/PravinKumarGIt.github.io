import React from "react";
import Wrapper from "./Styles/declineBanner.styles";

export default function DeclineBanner() {
  return (
    <Wrapper>
      <div className="decline-banner">
        <div className="decline-banner-container">
          <h1 className="decline-banner-title">We're sorry....</h1>
          <div className="decline-banner-padding"/>
          <div className="decline-banner-description">
            Unfortunately, it's not possible to proceed with your application at this time. 
            There are some other ways we may still be able to help you.
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
