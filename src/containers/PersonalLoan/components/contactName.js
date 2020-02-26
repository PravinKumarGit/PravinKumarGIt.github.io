import React from "react";
import Input from "../../../components/uielements/input";

export default function ContactName({ ...props }) {
    return (
        <>
            <Input
                title="Contact name"
                placeholder="Contact Name"
                {...props}
            />
        </>
    );
}
