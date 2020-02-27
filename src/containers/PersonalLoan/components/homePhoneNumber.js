import React from "react";
import Input from "../../../components/uielements/input";

export default function HomePhoneNumber({ ...props }) {
    return (
        <>
            <Input
                title="Home phone number"
                helpToolTip
                ToolTipText="Please provide your home phone number so that we may contact you."
                placeholder="Home Phone Number"
                maxLength={10}
                {...props}
            />
        </>
    );
}
