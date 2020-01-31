import React from "react";
import Select from "../../../components/uielements/select/select";
import { LOAN_REASON_OPTIONS } from "../../../constants/options";
export default function LoanReasons({ ...props }) {
  return (
    <>
      <Select
        Title="Reason for loan"
        options={LOAN_REASON_OPTIONS}
        helpToolTip
        ToolTipText="What do you require the majority of the funds for?"
        OptionalLabel
        {...props}
      />
    </>
  );
}
