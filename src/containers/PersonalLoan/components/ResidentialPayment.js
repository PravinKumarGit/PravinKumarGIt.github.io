import React from "react";
import Input from "../../../components/uielements/input";
import {useOptionalStateManager} from "../../../hooks/useOptionalStateManager";

const getShouldShow = ({residentialStatus}) => ["Renting", "Mortgage", "Boarding (with friends/family/relatives)"].includes(residentialStatus);

const getShortResidentialStatus = (residentialStatus) => {
  switch(residentialStatus) {
    case "Renting": {
      return "rent"
    }
    case "Boarding (with friends/family/relatives)": {
      return "board"
    }
    default: {
      return (residentialStatus || "").toLowerCase();
    }
  }
};

export default function ResidentialPayment({ ...props }) {
  const { values, setFieldValue, ...otherInputProps } = props;
  const { residentialStatus, residentialPaymentFrequency } = values;
  const { name } = otherInputProps;

  const shouldShow = getShouldShow(values);
  useOptionalStateManager(shouldShow, "", (value) => setFieldValue(name, value));
  const shortResidentialStatus = getShortResidentialStatus(residentialStatus);
  
  return (
    <>
      {shouldShow && (
        <Input
          title={`Your share of the ${shortResidentialStatus}, ${(residentialPaymentFrequency || "").toLowerCase()}`}
          placeholder="Your share..."
          helpToolTip
          ToolTipText={`Enter YOUR share of the ${shortResidentialStatus}, only what YOU pay`}
          type="number"
          prefix={<span>$</span>}
          maxLength={5}
          {...otherInputProps}
        />
      )}
    </>
  );
}
