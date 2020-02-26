import React from "react";
import Wrapper from "./Styles/optionItem.styles";

export default function OptionItem({ ...props }) {

  return (
    <Wrapper>
      <span className="bullet">
      
        <div className="marker">
          {props.bulletValue} 
        </div>
        
      </span>
      <span className="padding"></span>
      <span className="content">
        {props.content}
      </span>
    </Wrapper>
  );
}