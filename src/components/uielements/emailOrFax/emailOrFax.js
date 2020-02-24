import React from "react";

import MailIcon from "../../../theme/assets/mail.svg";
import FaxIcon from "../../../theme/assets/fax.svg";

import FieldLabel from "../fieldLabel";

import Wrapper from "./emailOrFax.styles";

export default function EmailOrFax({ ...props }) {
  const {
    title,
    sendVia,
    address,
    addressLabel,
    helpToolTip,
    ToolTipText,
    OptionalLabel,
  } = props;

  const imageSrc = sendVia === 'Email' ? MailIcon : sendVia === 'Fax' ? FaxIcon : ""

  const getHref = () => {
    switch (sendVia) {
      case "Email":
        return `mailto:${address}`;
      case "Fax":
        return `fax:${address}`;
      default:
        return ""
    }
  }
  return (
    <Wrapper>
      <div className="contactBox">
        <img src={imageSrc} alt={sendVia || ""} style={{ height: '45px', marginRight: '15px' }} />
        <div className="textBox-Label-Container">
          <FieldLabel
            title={title}
            helpToolTip={helpToolTip}
            ToolTipText={ToolTipText}
            OptionalLabel={OptionalLabel}
          />
          {address && <a href={getHref()} className="contactDetails">
            {addressLabel || address}
          </a>}
        </div>

      </div>
    </Wrapper>
  );
}