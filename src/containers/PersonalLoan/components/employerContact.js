import React from "react";
import Input from "../../../components/uielements/input";
export default function EmployerContact({ ...props }) {
  return (
    <>
      <Input
        title="Employer Contact Number"
        type="number"
        placeholder="Employer Contact Number"
        maxLength={10}
        OptionalLabel
        {...props}
      />
    </>
  );
}
