import React from "react";
import Select from "../../../components/uielements/select/select";
import { RELATIONSHIP_TO_YOU_OPTIONS } from "../../../constants/options";

export default function RelationToYou({ ...props }) {
    return (
        <>
            <Select
                Title="Relationship to you"
                isPlaceHolder
                placeholder="Relationship"
                options={RELATIONSHIP_TO_YOU_OPTIONS}
                {...props}
            />
        </>
    );
}
