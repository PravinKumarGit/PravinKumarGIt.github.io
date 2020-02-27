import React from "react";
import Input from "../../../components/uielements/input";

export default function TotalCreditLimit({ ...props }) {
    return (
        <>
            <Input
                title="Total credit limit"
                placeholder="Credit Limit"
                prefix={<span>$</span>}
                {...props}
            />
        </>
    );
}
