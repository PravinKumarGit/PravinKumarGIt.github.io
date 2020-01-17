import React from "react";
import DatePicker from "../../../components/uielements/datePicker";
export default function LoanReasons({ ...props }) {
  let todayTime = new Date();
  todayTime.setFullYear(todayTime.getFullYear() - 18);
  return (
    <>
      <DatePicker
        Title="Date of Birth"
        helpToolTip
        ToolTipText="You need to be 18 years or older."
        maxDate={todayTime}
        {...props}
      />
    </>
  );
}
