import React from "react";
import Select from "../../../components/uielements/select/select";
import { INCOME_FREQUENCY_OPTIONS } from "../../../constants/options";
export default function LoanReasons({ ...props }) {
  return (
    <>
      <Select
        isPlaceHolder
        placeholder="Select..."
        Title="Income frequency"
        options={INCOME_FREQUENCY_OPTIONS}
        {...props}
      />
    </>
  );
}
