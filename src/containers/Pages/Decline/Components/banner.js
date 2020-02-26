import React from "react";
import Wrapper from "./Styles/banner.styles";

export default function Banner() {
  return (
    <Wrapper>
      <div className="banner">
        <div className="container">
          <h1 className="title">We're sorry....</h1>
          <div className="padding"/>
          <div className="description">
            Unfortunately, it's not possible to proceed with your application at this time. 
            There are some other ways we may still be able to help you.
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
