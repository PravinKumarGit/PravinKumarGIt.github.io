import React from "react";
import Select from "../../../components/uielements/select/select";
import { IDENTIFICATION_TYPE_OPTIONS } from "../../../constants/options";

export default function IdentificationType({ ...props }) {
    return (
        <>
            <Select
                isPlaceHolder
                placeholder="Please select... "
                Title="which type of identification will you provide?"
                options={IDENTIFICATION_TYPE_OPTIONS}
                {...props}
            />
        </>
    );
}
