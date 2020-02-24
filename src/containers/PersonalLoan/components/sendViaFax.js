import React from "react";
import EmailOrFax from "../../../components/uielements/emailOrFax"

export default function SendViaFax({ ...props }) {
    return (
        <>
            <EmailOrFax
                title="Send via Fax"
                sendVia="Fax"
                address={1800324746}
                addressLabel="1800 32 47 46 (1800 FAIRGO)"
                {...props}
            />
        </>
    );
}
