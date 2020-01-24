import React from "react";
import Input from "../../../components/uielements/input";
export default function MiddleName({ ...props }) {
  return (
    <>
      <Input
        title="Middle Name"
        helpToolTip
        ToolTipText="Your Middle Name or Middle Initial."
        OptionalLabel
        placeholder="Middle Name"
        {...props}
      />
    </>
  );
}
