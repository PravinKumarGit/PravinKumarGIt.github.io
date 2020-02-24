import React from "react";
import FilePicker from "../../../components/uielements/filePicker";

export default function CentreLinkField({ ...props }) {
    return (
        <>
            <FilePicker
                title="Centrelink"
                fieldLabel="If you recive centrelink income as well, please upload a statement"
                name="centrelink"
                accept={[".PDF", ".JPG", ".PNG"]}
                maxFileSize={5242880}
                {...props} />
        </>
    );
}
