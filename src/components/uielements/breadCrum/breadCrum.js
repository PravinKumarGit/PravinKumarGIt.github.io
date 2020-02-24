import React from "react";

import Wrapper from "./breadCrum.styles";
export default function Select({ ...props }) {
  const { steps, activeStep, changeStep } = props;
  const stepsActive = (steps || []).filter(item => item.active);
  return (
    <Wrapper>
      <div className="applicationBreadCrumb-Container">
        <div className="breadCrumbBox">
          {stepsActive.map(item => (
            <div
              className="breadCrumb-title-and-button"
              onClick={() => changeStep(item.step)}
              key={`breadCrumb${item.step}`}
            >
              <span
                className={`breadCrumb-title ${
                  activeStep >= item.step ? "active" : "inactive"
                }`}
              >
                {item.label}
              </span>
              <div
                className={`section-${
                  activeStep >= item.step ? "active" : "inactive"
                }`}
              ></div>
              {item.step !== stepsActive[0].step && (
                <>
                  <div className="line"></div>
                  <div
                    className={
                      activeStep >= item.step ? "line-active" : "line-inactive"
                    }
                  ></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
