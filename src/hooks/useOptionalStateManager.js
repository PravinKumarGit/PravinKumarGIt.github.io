import { useState } from "react";

const shouldShowHasChangedToTrue = (shouldShow, previousShouldShow) =>
  shouldShow === true && previousShouldShow === false;

const shouldShowHasChangedToFalse = (shouldShow, previousShouldShow) =>
  shouldShow === false && previousShouldShow === true;

// Used to automatically set select values when the status of 
// shouldShow changes. I.e. when we are not showing, then we 
// start to show, we should set the default value (typically "")
// when we are no longer showing, we should remove from our form
// state, so set the value to undefined.
export const useOptionalStateManager = (shouldShow, defaultValue, setValue) => {
  const [previousShouldShow, setPreviousShouldShow] = useState(shouldShow);

  if(shouldShowHasChangedToTrue(shouldShow, previousShouldShow)) {
    setValue(defaultValue);
    setPreviousShouldShow(shouldShow);
  }
  
  if (shouldShowHasChangedToFalse(shouldShow, previousShouldShow)) {
    setValue(undefined);
    setPreviousShouldShow(shouldShow);
  }
};