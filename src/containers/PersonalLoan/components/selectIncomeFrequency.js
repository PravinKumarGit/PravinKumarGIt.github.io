import React from "react";
import Select from "../../../components/uielements/select/select";
import { INCOME_FREQUENCY_OPTIONS } from "../../../constants/options";
export default function LoanReasons({ ...props }) {
  return (
    <>
      <Select
        Title="Income frequency"
        helpToolTip
        ToolTipText="How often do you receive your main source of income?"
        options={INCOME_FREQUENCY_OPTIONS}
        {...props}
      />
    </>
  );
}
