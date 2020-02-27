import React from "react";
import Wrapper from "./Styles/getCreditFile.styles";

import ExitToAppSvg from "../../../../theme/assets/exit-to-app.svg";

export default function GetCreditFile() {
  const getCreditFileContentMessage =
    "You can access your free credit file through Equifax to check your credit score and confirm your details are correct.";

  return (
    <Wrapper>
      <div className="get-credit-file">
        <div className="get-credit-file-message">{getCreditFileContentMessage}</div>
        <div className="get-credit-file-padding"></div>
        <div className="get-credit-file-content">
          <span>
            <a className="get-credit-file-button" href="http://www.veda.com.au">
              <div className="get-credit-file-button-text">Get My Credit File</div>
              <div className="get-credit-file-button-content-spacing"></div>
              <div className="get-credit-file-button-icon">
                <img src={ExitToAppSvg} alt=""></img>
              </div>
            </a>
          </span>
        </div>
      </div>
    </Wrapper>
  );
}
