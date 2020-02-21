import React from "react";
import Input from "../../../components/uielements/input";
import {useOptionalStateManager} from "../../../hooks/useOptionalStateManager";

const getShouldShow = ({residentialStatus}) => ["Renting", "Caravan", "Other", "Boarding (with friends/family/relatives)"].includes(residentialStatus);

export default function LandlordContactNumber({ ...props }) {
  const { values, setFieldValue, ...otherInputProps } = props;
  const { name } = otherInputProps;

  const shouldShow = getShouldShow(values);
  useOptionalStateManager(shouldShow, "", (value) => setFieldValue(name, value));

  return (
    <>
      {shouldShow && (
        <Input
          title="Landlord contact number"
          placeholder="Landlord Contact Number"
          helpToolTip
          ToolTipText={`Please provide a contact number for the person you live with or rent from, who can verify your current address`}
          type="number"
          maxLength={10}
          {...otherInputProps}
        />
      )}
    </>
  );
}
