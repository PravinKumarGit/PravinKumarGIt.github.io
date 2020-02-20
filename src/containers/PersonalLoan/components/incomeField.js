import React from "react";
import Input from "../../../components/uielements/input";
export default function IncomeFields({ ...props }) {
  const { incomeFrequency, ...rest } = props;
  
  return (
    <>
      <Input
        title={`${incomeFrequency || 'Weekly'} total income (including benefits)`}
        type="number"
        prefix={<span>$</span>}
        maxLength={5}
        {...rest}
      />
    </>
  );
}
