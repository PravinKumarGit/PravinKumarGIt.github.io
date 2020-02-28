import React from "react";
import Select from "../../../components/uielements/select/select";
import { AMOUNT_BALANCE_OPTIONS } from "../../../constants/options";

export default function AmountBalance({ ...props }) {
    return (
        <>
            <Select
                isPlaceHolder
                placeholder="Select..."
                Title="Amount of the balance you pay each month"
                options={AMOUNT_BALANCE_OPTIONS}
                {...props}
            />
        </>
    );
}
