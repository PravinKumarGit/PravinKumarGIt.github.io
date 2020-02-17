import React from "react";
import Select from "../../../components/uielements/select/select";
import { DEPENDENT_COUNT_OPTIONS } from "../../../constants/options";
export default function DependentCount({ ...props }) {
  return (
    <>
      <Select
        isPlaceHolder
        placeholder="Please Select"
        Title="Number of dependants"
        options={DEPENDENT_COUNT_OPTIONS}
        {...props}
      />
    </>
  );
}
