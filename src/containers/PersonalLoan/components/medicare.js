/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Select from "../../../components/uielements/select/select";
import Input from "../../../components/uielements/input";

import MedicareExpiryDate from "./medicareExpiryDate"

import { CARD_COLOUR_OPTIONS } from "../../../constants/options";

export default function Medicare({ ...props }) {
    const {
        values: {
            medicareName,
            medicareNumber,
            medicareReference,
            medicareCardColour

        },
        errors,
        touched,
        handleChange,
        handleBlur,
        setFieldValueAndTouchStatus
    } = props;

    useEffect(() => {
        switch (medicareCardColour) {
            case "Green":
                return setFieldValueAndTouchStatus("medicareDateExpiry", { day: 1, month: "", year: "" })
            case "Blue":
            case "Yellow":
                return setFieldValueAndTouchStatus("medicareDateExpiry", { day: "", month: "", year: "" })
            default:
        }
    }, [medicareCardColour])

    return (
        <>
            <Input
                title="Name on card"
                placeholder="Name on Card"
                name="medicareName"
                value={medicareName}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.medicareName ? errors.medicareName : ""}
                {...props}
            />
            <Input
                title="Card number"
                placeholder="Card No"
                name="medicareNumber"
                value={medicareNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.medicareNumber ? errors.medicareNumber : ""}
                {...props}
            />
            <Input
                title="Reference number"
                placeholder="Reference No"
                name="medicareReference"
                value={medicareReference}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.medicareReference ? errors.medicareReference : ""}
                {...props}
            />
            <Select
                Title="Card colour"
                isPlaceHolder
                placeholder="Please Select..."
                options={CARD_COLOUR_OPTIONS}
                name="medicareCardColour"
                value={medicareCardColour}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={touched.medicareCardColour ? errors.medicareCardColour : ""}
                {...props}
            />

            {medicareCardColour && <MedicareExpiryDate {...props} hideDateField={medicareCardColour !== "Green"} />}
        </>
    );
}
