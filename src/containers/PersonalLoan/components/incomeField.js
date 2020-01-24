import React from "react";
import Input from "../../../components/uielements/input";
export default function IncomeFields({ ...props }) {
  return (
    <>
      <Input
        title="Weekly total income (including benefits)"
        type="number"
        prefix={<span>$</span>}
        {...props}
      />
    </>
  );
}
