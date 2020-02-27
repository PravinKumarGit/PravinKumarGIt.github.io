import React from "react";
import Wrapper from "./Styles/optionItem.styles";

export default function OptionItem({ ...props }) {

  return (
    <Wrapper>
      <div className="option-item">
      <span className="option-item-bullet">
        <div className="option-item-marker">
          {props.bulletValue} 
        </div>
      </span>
      <span className="option-item-padding"></span>
      <span className="option-item-content">
        {props.content}
      </span>
      </div>
    </Wrapper>
  );
}