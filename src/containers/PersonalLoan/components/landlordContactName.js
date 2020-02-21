import React from "react";
import Input from "../../../components/uielements/input";
import {useOptionalStateManager} from "../../../hooks/useOptionalStateManager";

const getShouldShow = ({residentialStatus}) => ["Renting", "Caravan", "Other", "Boarding (with friends/family/relatives)"].includes(residentialStatus);

export default function LandlordContactName({ ...props }) {
  const { values, setFieldValue, ...otherInputProps } = props;
  const { name } = otherInputProps;
  
  const shouldShow = getShouldShow(values);
  useOptionalStateManager(shouldShow, "", (value) => setFieldValue(name, value));
  
  return (
    <>
      {shouldShow && (
        <Input 
          title="Landlord contact name" 
          placeholder="Landlord Contact Name"
          helpToolTip
          ToolTipText="Providing this now can enable a faster outcome"
          {...otherInputProps} 
        />
      )}
    </>
  );
}
