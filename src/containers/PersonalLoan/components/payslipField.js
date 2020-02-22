import React from "react";
import FilePicker from "../../../components/uielements/filePicker";

export default function PayslipField({ ...props }) {
    return (
        <>
            <FilePicker
                title="Payslip"
                fieldLabel="Please upload your payslip to confirm your income"
                name="payslip"
                accept={[".PDF", ".JPG", ".PNG"]}
                maxFileSize={5242880}
                {...props} />
        </>
    );
}
