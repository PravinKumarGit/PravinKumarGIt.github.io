import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import Wrapper from "./Styles/referralConsent.styles";

import loanFormActions from "../../../../redux/loanForm/actions";

import ReferralForm from "../../../PersonalLoan/referralForm";
import CheckBox from "../../../../components/uielements/checkBox";

const ReferralConsent = () => {
  const { initialValue } = useSelector(state => state.loanForm);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { setSubmitting } = actions;
    setSubmitting(true);
    try {
      setSubmitting(false);
      dispatch(loanFormActions.postLoanFormRequest({ values }));
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  const referralConsentContentMessage =
    "Given we are unable to offer a loan today, we may be able to refer you to other credit providers and alternative service providers as described in our Privacy Policies, who may be able to offer you an alternative finance option. Do you give us approval to do this and agree to sending your contact details, name and financial information to these providers?";

  return (
    <Wrapper>
      <div className="referral-consent">
        <div className="referral-consent-message">
          We can refer you to another lender who may be able to assist you.
        </div>
        <div className="referral-consent-padding"></div>
        <div className="referral-consent-content">
          {
            <CheckBox
              onChange={() => console.log("Hello")}
              checked={initialValue.referralConsent}
              name="referralConsent"
              setFieldValue={initialValue.referralConsent}
            >
              <strong>Referral Consent</strong>: {referralConsentContentMessage}
            </CheckBox>
          }
          <Formik
            initialValues={initialValue}
            onSubmit={(values, actions) => handleSubmit(values, actions)}
          >
            {props => <ReferralForm {...props} />}
          </Formik>
        </div>
      </div>
    </Wrapper>
  );
};

export default ReferralConsent;
