import React from "react";

import Wrapper from "./breadCrum.styles";
export default function Select({ ...props }) {
  const { step, changeStep } = props;
  return (
    <Wrapper>
      <section className="applicationBreadCrumb-Container">
        <article className="breadCrumbBox">
          <section
            className="breadCrumb-title-and-button"
            onClick={() => changeStep(1)}
          >
            <span
              className={`breadCrumb-title ${
                step === 1 ? "active" : "inactive"
              }`}
            >
              Start
            </span>
            <section
              className={`section-${step === 1 ? "active" : "inactive"}`}
            ></section>
          </section>
          <section
            className="breadCrumb-title-and-button"
            onClick={() => changeStep(2)}
          >
            <span
              className={`breadCrumb-title ${
                step === 2 ? "active" : "inactive"
              }`}
            >
              Bank Statement
            </span>
            <section
              className={`section-${step === 2 ? "active" : "inactive"}`}
            ></section>
            <section className="line"></section>
          </section>
          <section
            className="breadCrumb-title-and-button"
            onClick={() => changeStep(3)}
          >
            <span
              className={`breadCrumb-title ${
                step === 3 ? "active" : "inactive"
              }`}
            >
              General Living
            </span>
            <section
              className={`section-${step === 3 ? "active" : "inactive"}`}
            ></section>
            <section className="line"></section>
          </section>
          <section
            className="breadCrumb-title-and-button"
            onClick={() => changeStep(4)}
          >
            <span
              className={`breadCrumb-title ${
                step === 4 ? "active" : "inactive"
              }`}
            >
              Finally
            </span>
            <section
              className={`section-${step === 4 ? "active" : "inactive"}`}
            ></section>
            <section className="line"></section>
          </section>
        </article>
      </section>
    </Wrapper>
  );
}
