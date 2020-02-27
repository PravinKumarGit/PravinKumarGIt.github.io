import React from "react";
import Verification from "../../../components/uielements/verification";
import { YES_NO_VALUES } from "../../../constants/commonConstants"

export default function YesNo({ ...props }) {
    const { value } = props;

    return (
        <>
            <Verification
                title={(
                    <> Do you know of any foreseeable significant <br />
                        changes to your circumstances that will lead to<br />
                        changes in your ability to make contracted <br />
                        repayments?If you are not comfortable with <br />
                        the proposed repayments then you need to <br />
                        highlight this to your Credit Consultant when<br />
                        contacted during the assessment process.  </>
                )}
                leftButtonProps={{ value: YES_NO_VALUES.NO, checked: value === YES_NO_VALUES.NO }}
                leftButtonLabel="No"
                rightButtonProps={{ value: YES_NO_VALUES.YES, checked: value === YES_NO_VALUES.YES }}
                rightButtonLabel="Yes"
                {...props}
            />
        </>
    );
}
