import React from "react";
import Verification from "../../../components/uielements/verification";
import { AGREE_NOT_AGREE_VALUES } from "../../../constants/commonConstants"

export default function IdentityVerification({ ...props }) {
    const { value } = props;

    return (
        <>
            <Verification
                title={<>Identity Verification: The driver's license or <br />
                    Medicare card details you provide will be  <br />
                    verified with the issuer to reduce fraud. by  <br />
                    marking agree, you consent to this <br />
                    occurring.</>}
                leftButtonProps={{ value: AGREE_NOT_AGREE_VALUES.AGREE, checked: value === AGREE_NOT_AGREE_VALUES.AGREE }}
                leftButtonLabel="I Agree"
                rightButtonProps={{ value: AGREE_NOT_AGREE_VALUES.NOT_AGREE, checked: value === AGREE_NOT_AGREE_VALUES.NOT_AGREE }}
                rightButtonLabel="I Do Not Agree"
                {...props}
            />
        </>
    );
}
