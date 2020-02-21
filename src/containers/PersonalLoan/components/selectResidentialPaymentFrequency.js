import React from "react";
import Select from "../../../components/uielements/select/select";
import { RESIDENTIAL_PAYMENT_FREQUENCY } from "../../../constants/options";
import { useOptionalStateManager } from "../../../hooks/useOptionalStateManager";


const getDefaultSelectValue = () => RESIDENTIAL_PAYMENT_FREQUENCY[0].value;
const getShouldShow = ({residentialStatus}) => ['Renting', 'Mortgage', 'Boarding (with friends/family/relatives)'].includes(residentialStatus);

export default function ResidentialPaymentFrequency(props) {
  const { values, setFieldValue, ...selectProps } = props;
  const { name } = selectProps;
  
  const shouldShow = getShouldShow(values);
  useOptionalStateManager(
    shouldShow,
    getDefaultSelectValue(), 
    (value) => setFieldValue(name, value),
  );
  
  return (
    <>
      {shouldShow && (
        <Select
          Title="How often do you pay this"
          options={RESIDENTIAL_PAYMENT_FREQUENCY}
          {...selectProps}
        />
      )}
    </>
  );
}

export const __TEST__ = {
  getDefaultSelectValue,
  getShouldShow
};