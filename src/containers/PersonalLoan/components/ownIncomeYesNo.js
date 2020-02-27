import React from "react";
import Verification from "../../../components/uielements/verification";
import { YES_NO_VALUES } from "../../../constants/commonConstants"

export default function OwnIncomeYesNo({ ...props }) {
    const { value } = props;

    return (
        <>
            <Verification
                title={(
                    <> Do they have their own income ?</>
                )}
                leftButtonProps={{ value: YES_NO_VALUES.YES, checked: value === YES_NO_VALUES.YES }}
                leftButtonLabel="Yes"
                rightButtonProps={{ value: YES_NO_VALUES.NO, checked: value === YES_NO_VALUES.NO }}
                rightButtonLabel="No"
                {...props}
            />
        </>
    );
}
