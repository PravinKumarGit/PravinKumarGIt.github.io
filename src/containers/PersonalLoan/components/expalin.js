import React from "react";
import TextArea from "../../../components/uielements/textArea";

export default function Explain({ ...props }) {
  return (
    <>
      <TextArea
        title="Please explain"
           {...props}
      />
    </>
  );
}
