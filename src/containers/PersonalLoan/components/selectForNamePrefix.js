import React from "react";
import Select from "../../../components/uielements/select/select";
import { NAME_PREFIX } from "../../../constants/options";
export default function LoanReasons({ ...props }) {
  return (
    <>
      <Select
        isPlaceHolder
        placeholder="Select..."
        Title="Title"
        options={NAME_PREFIX}
        {...props}
      />
    </>
  );
}
