import React from "react";
import Input from "../../../components/uielements/input";

export default function ContactNumber({ ...props }) {
    return (
        <>
            <Input
                title="Contact number"
                placeholder="Contact Number"
                maxLength={10}
                {...props}
            />
        </>
    );
}
