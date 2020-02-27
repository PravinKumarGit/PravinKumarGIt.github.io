import React from "react";
import { useSelector } from "react-redux";
import { THEMES } from "../../../theme/global/constants";

import Image from "../../../theme/assets/icon-tooltip.svg";
import ImageRent from "../../../theme/assets/icon-tooltip-rent.svg";
import Wrapper from "./toolTipIcon.styles";
export default function ToolTipIcon({ ...props }) {
  const {ToolTipText} = props;
  const themeName = useSelector(state => state.StartUp.theme);
  let imageSrc = Image;
  switch (themeName) {
    case THEMES.rentBond:
      imageSrc = ImageRent;
      break;
    default:
  }
  return (
    <Wrapper>
      <i className="toolTip-Icon">
        <img src={imageSrc} alt="help icon" />
        {ToolTipText && <span className="toolTip-Text">{ToolTipText}</span>}
      </i>
    </Wrapper>
  );
}
