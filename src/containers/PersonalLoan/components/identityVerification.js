import React from "react";
import Verification from "../../../components/uielements/verification";
export default function IdentityVerification({ ...props }) {

    return (
        <>
            <Verification
                title={"Identity Verification: The driver's license or Medicare card details you provide will be verified with the issuer to reduce fraud. by marking agree, you consent to this occurring."}
            />
        </>
    );
}
