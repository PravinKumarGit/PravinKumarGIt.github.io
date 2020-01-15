import React from "react";

import Wrapper from "./breadCrum.styles";
export default function Select({ ...props }) {
  return (
    <Wrapper>
      <section class="applicationBreadCrumb-Container">
        <article class="breadCrumbBox">
          <section class="line"></section>
          <section class="breadCrumb-title-and-button">
            <span class="breadCrumb-title-active">Start</span>
            <section class="section-active"></section>
          </section>
          <section class="breadCrumb-title-and-button">
            <span class="breadCrumb-title-inactive">Bank Statement</span>
            <section class="section-inactive"></section>
          </section>
          <section class="breadCrumb-title-and-button">
            <span class="breadCrumb-title-inactive">General Living</span>
            <section class="section-inactive"></section>
          </section>
          <section class="breadCrumb-title-and-button">
            <span class="breadCrumb-title-inactive">Finally</span>
            <section class="section-inactive"></section>
          </section>
        </article>
      </section>
    </Wrapper>
  );
}
