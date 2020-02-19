import React from "react";
import Select from "../../../components/uielements/select/select";
import { COUNT_OPTIONS } from "../../../constants/options";
export default function DependentCount({ ...props }) {
  return (
    <>
      <Select
        isPlaceHolder
        placeholder="Select..."
        Title="Number of dependants"
        options={COUNT_OPTIONS(0,6)}
        {...props}
      />
    </>
  );
}
