import React from "react";
import Select from "../../../components/uielements/select/select";
import { COUNT_OPTIONS } from "../../../constants/options";
export default function CreditCardCount({ ...props }) {
  return (
    <>
      <Select
        isPlaceHolder
        placeholder="Number of credit cards"
        Title="Credit Card commitments"
        options={COUNT_OPTIONS(0, 5)}
        {...props}
      />
    </>
  );
}
