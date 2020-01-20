import React from "react";
import Input from "../../../components/uielements/input";
export default function FirstName({ ...props }) {
  return (
    <>
      <Input title="First Name" placeHolder="First Name" {...props} />
    </>
  );
}
