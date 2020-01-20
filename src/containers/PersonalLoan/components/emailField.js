import React from "react";
import Input from "../../../components/uielements/input";
export default function EmailField({ ...props }) {
  return (
    <>
      <Input
        title="Email Address"
        placeHolder="Email Address"
        preFix={<span>@</span>}
        {...props}
      />
    </>
  );
}
