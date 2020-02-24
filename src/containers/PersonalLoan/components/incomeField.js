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
        helpToolTip
        ToolTipText="The TOTAL amount you REGULARLY receive from all sources of income, after tax, shown on your bank statements."
        {...rest}
      />
    </>
  );
}
