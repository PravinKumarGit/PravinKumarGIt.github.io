import React from "react";

import Wrapper from "./breadCrum.styles";
export default function Select({ ...props }) {
  return (
    <Wrapper>
      <section className="applicationBreadCrumb-Container">
        <article className="breadCrumbBox">
          <section className="line"></section>
          <section className="breadCrumb-title-and-button">
            <span className="breadCrumb-title-active">Start</span>
            <section className="section-active"></section>
          </section>
          <section className="breadCrumb-title-and-button">
            <span className="breadCrumb-title-inactive">Bank Statement</span>
            <section className="section-inactive"></section>
          </section>
          <section className="breadCrumb-title-and-button">
            <span className="breadCrumb-title-inactive">General Living</span>
            <section className="section-inactive"></section>
          </section>
          <section className="breadCrumb-title-and-button">
            <span className="breadCrumb-title-inactive">Finally</span>
            <section className="section-inactive"></section>
          </section>
        </article>
      </section>
    </Wrapper>
  );
}
