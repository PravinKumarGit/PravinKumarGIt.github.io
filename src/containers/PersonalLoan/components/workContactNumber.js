import React from "react";
import Input from "../../../components/uielements/input";

export default function WorkContactNumber({ ...props }) {
  return (
    <>
      <Input
        title="Your work contact number"
        helpToolTip
        ToolTipText=" Please provide your work phone number that we may use to contact you."
        placeholder=" Work Contact Number"
        maxLength={10}
        {...props}
      />
    </>
  );
}
