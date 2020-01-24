import React from "react";
import Input from "../../../components/uielements/input";
export default function EmailField({ ...props }) {
  return (
    <>
      <Input
        title="Email Address"
        placeholder="Email Address"
        prefix={<span>@</span>}
        {...props}
      />
    </>
  );
}
