import React from "react";
import Wrapper from "./Styles/getCreditFile.styles";

import ExitToAppSvg from "../../../../theme/assets/exit-to-app.svg";

export default function GetCreditFile() {
  const getCreditFileContentMessage =
    "You can access your free credit file through Equifax to check your credit score and confirm your details are correct.";

  return (
    <Wrapper>
      <div className="referral-consent">
        <div className="message">{getCreditFileContentMessage}</div>
        <div className="padding"></div>
        <div className="content">
          <span>
            <a className="get-credit-file-button" href="http://www.veda.com.au">
              <span>Get My Credit File</span>
              <span className="content-spacing"></span>
              <span className="icon">
                <img src={ExitToAppSvg} alt=""></img>
              </span>
            </a>
          </span>
        </div>
      </div>
    </Wrapper>
  );
}
