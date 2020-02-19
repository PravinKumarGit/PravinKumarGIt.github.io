import React from "react";
import Select from "../../../components/uielements/select/select";
import { LIVING_SITUATION_OPTIONS } from "../../../constants/options";
export default function LivingSituation({ ...props }) {
  return (
    <>
      <Select
        isPlaceHolder
        placeholder="Select..."
        Title="Describe your living situation"
        options={LIVING_SITUATION_OPTIONS}
        {...props}
      />
    </>
  );
}
