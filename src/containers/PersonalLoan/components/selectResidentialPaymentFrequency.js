import React, { useState } from "react";
import Select from "../../../components/uielements/select/select";
import { RESIDENTIAL_PAYMENT_FREQUENCY } from "../../../constants/options";

const shouldShowHasChangedToFalse = (shouldShow, previousShouldShow) => 
  shouldShow === false && previousShouldShow === true;
const shouldShowHasChangedToTrue = (shouldShow, previousShouldShow) => 
  shouldShow === true && previousShouldShow === false;

const defaultDisabledFieldValue = undefined;

// Used to automatically set select values when the status of 
// shouldShow changes. I.e. when we are not showing, then we 
// start to show, we should set the default value (typically "")
// when we are no longer showing, we should remove from our form
// state, so set the value to undefined.
const useOptionalSelectManager = ({defaultValue, setSelectValue, shouldShow}) => {
  const [previousShouldShow, setPreviousShouldShow] = useState(shouldShow);

  if (shouldShowHasChangedToTrue(shouldShow, previousShouldShow)) {
    setSelectValue(defaultValue);
    setPreviousShouldShow(shouldShow);
  }
  if (shouldShowHasChangedToFalse(shouldShow, previousShouldShow)) {
    setSelectValue(defaultDisabledFieldValue);
    setPreviousShouldShow(shouldShow);
  }
};

const getDefaultSelectValue = (selectOptions) => selectOptions[0].value;
const getShouldShow = ({residentialStatus}) => ['Renting', 'Mortgage', 'Boarding (with friends/family/relatives)'].includes(residentialStatus);

export default function ResidentialPaymentFrequency(props) {
  const { values, setFieldValue, ...selectProps } = props;
  const { name } = selectProps;
  
  const shouldShow = getShouldShow(values);
  useOptionalSelectManager({
    defaultValue: getDefaultSelectValue(RESIDENTIAL_PAYMENT_FREQUENCY), 
    setSelectValue: (value) => setFieldValue(name, value), 
    shouldShow,
  });

  return (
    <>
      {shouldShow && (<Select
        Title="How often do you pay this"
        options={RESIDENTIAL_PAYMENT_FREQUENCY}
        {...selectProps}
      />)}
    </>
  );
}