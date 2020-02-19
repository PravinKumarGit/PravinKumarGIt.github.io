import React from "react";
import Select from "../../../components/uielements/select/select";
import { EMPLOYMENT_OPTIONS } from "../../../constants/options";
export default function Employment({ ...props }) {
  return (
    <>
      <Select
        isPlaceHolder
        placeholder="Select..."
        Title="Employment Type"
        options={EMPLOYMENT_OPTIONS}
        {...props}
      />
    </>
  );
}
