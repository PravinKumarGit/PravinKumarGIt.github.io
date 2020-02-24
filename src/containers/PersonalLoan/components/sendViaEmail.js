import React from "react";
import EmailOrFax from "../../../components/uielements/emailOrFax"

export default function SendViaEmail({ ...props }) {
    return (
        <>
            <EmailOrFax
                title="Send via Email"
                sendVia="Email"
                address="apply@fairgofinance.com.au"
                {...props}
            />
        </>
    );
}
