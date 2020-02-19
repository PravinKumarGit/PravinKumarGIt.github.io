import React from "react";
import Select from "../../../components/uielements/select/select";
import { RESIDENTIAL_STATUS } from "../../../constants/options";
export default function ResidentialStatus({ ...props }) {
  return (
    <>
      <Select
        isPlaceHolder
        placeholder="Select..."
        Title="Describe your residential status"
        options={RESIDENTIAL_STATUS}
        {...props}
      />
    </>
  );
}
