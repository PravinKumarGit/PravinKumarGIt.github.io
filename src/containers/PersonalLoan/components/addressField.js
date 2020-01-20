import React from "react";
import Input from "../../../components/uielements/input";
import Wrapper from "./Styles/addressField.styles";

export default function EmailField({ ...props }) {
  return (
    <Wrapper>
      <Input
        title="Type here to search for your address"
        placeHolder="Address Search"
        suffix={
          <button className="Address-ManualButton noselect">Manual</button>
        }
        {...props}
      />
    </Wrapper>
  );
}
