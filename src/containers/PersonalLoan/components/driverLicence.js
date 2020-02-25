/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Select from "../../../components/uielements/select/select";
import Input from "../../../components/uielements/input";

import ExpiryDate from "./expiryDate"

import { STATE_OPTIONS } from "../../../constants/options";

export default function DriverLicence({ ...props }) {
    const {
        values: {
            driversLicenceNumber,
            driversLicenceState,
            driversLicenceCardNumber

        },
        errors,
        touched,
        handleChange,
        handleBlur,
        setFieldValueAndTouchStatus
    } = props;

    useEffect(() => {
        setFieldValueAndTouchStatus("driversLicenceCardNumber")
        setFieldValueAndTouchStatus("driversLicenceExpiry", { day: "", month: "", year: "" })
    }, [driversLicenceState])

    return (
        <>
            <Input
                title="Licence number"
                placeholder="LICENCE NUMBER"
                name="driversLicenceNumber"
                value={driversLicenceNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.driversLicenceNumber ? errors.driversLicenceNumber : ""}
                {...props}
            />
            <Select
                Title="State"
                isPlaceHolder
                placeholder="Please Select..."
                options={STATE_OPTIONS}
                name="driversLicenceState"
                value={driversLicenceState}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.driversLicenceState ? errors.driversLicenceState : ""}
                {...props}
            />
            {driversLicenceState === "NSW" && <Input
                title="Card number"
                placeholder="Card No"
                name="driversLicenceCardNumber"
                value={driversLicenceCardNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.driversLicenceCardNumber ? errors.driversLicenceCardNumber : ""}
                {...props}
            />}
            {driversLicenceState === "WA" && <ExpiryDate {...props} />}
        </>
    );
}
