import React from "react";
import Select from "../../../components/uielements/select/select";
import { OCCUPATION_OPTIONS } from "../../../constants/options";
export default function Occupation({ ...props }) {
  return (
    <>
      <Select
        isPlaceHolder
        placeholder="Select..."
        Title="Occupation"
        options={OCCUPATION_OPTIONS}
        {...props}
      />
    </>
  );
}
