import React from "react";
import Input from "../../../components/uielements/input";
export default function MobileNumber({ ...props }) {
  return (
    <>
      <Input title="Mobile Number" placeHolder="Mobile Number" {...props} />
    </>
  );
}
