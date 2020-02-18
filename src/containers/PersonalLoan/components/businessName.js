import React from "react";
import Input from "../../../components/uielements/input";
export default function BusinessName({ ...props }) {
  return (
    <>
      <Input
        title="Business Name"
        placeholder="Business Name"
        OptionalLabel
        {...props}
      />
    </>
  );
}
