import React from "react";

import { THEMES } from "../../../theme/global/constants";
import LogoImage from "../../../theme/assets/logo-rebranded-2019.png";
import LogoImageRentBond from "../../../theme/assets/rent_bond-logo.svg";
import Wrapper from "./topHeader.styles";
export default function Select({ ...props }) {
  return (
    <Wrapper>
      <div className="Header-Container">
        <div className="logos">
         {THEMES.rentBond === props.currentTheme && <div className="logoBox">
            <img src={LogoImageRentBond} alt="logo" />
          </div>}
          <div className="logoBox">
            <img src={LogoImage} alt="logo" />
          </div>
        </div>
        <a className="header-PhoneNumber" href="tel:1300 324 746">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="phone-alt"
            className="svg-inline--fa fa-phone-alt fa-w-16 "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
            ></path>
          </svg>
          1300 324 746
        </a>
      </div>
    </Wrapper>
  );
}
