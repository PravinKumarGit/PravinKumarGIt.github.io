/* eslint-disable no-useless-escape */
import * as Yup from "yup";

const requiredFieldMessage = "is required";
const invalidValue = "not a valid value";
const requiredLetterInputFieldRegexMessage =
  "Value entered must be minimum 2 characters.";
const emailInputFieldRegexMessage = "Please enter a valid email address";
const numberMinMaxInputMessage = "Please enter minimum 100 maximum 10000.";
const requireCheckboxMessage = "Field must be checked";
const requiredPhoneInputFieldRegexMessage =
  "Please enter a valid mobile number 10 digit start with 04.";

const requiredLetterInputFieldRegex = /^[A-Za-z ]+$/;
const requiredDigitInputFieldRegex = /^[0-9]+$/;
const requiredDigitOrLetterInputFieldRegex = /^[0-9A-Za-z ]+$/;
const twoCharacterInputFieldRegex = /^[A-Za-z ]{2,}$/;
const emailInputFieldRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const digitPhoneInputFieldRegex = /^04\d{8}$/;

export default Yup.object({
  title: Yup.string()
    .trim()
    .required(requiredFieldMessage),
  loanAmount: Yup.string()
    .trim()
    .required(requiredFieldMessage),
  loanReason: Yup.string()
    .trim()
    .required(requiredFieldMessage),
  firstName: Yup.string()
    .trim()
    .matches(requiredLetterInputFieldRegex, {
      message: invalidValue,
      excludeEmptyString: true
    })
    .matches(twoCharacterInputFieldRegex, {
      message: requiredLetterInputFieldRegexMessage,
      excludeEmptyString: true
    })
    .required(requiredFieldMessage),
  middleName: Yup.string()
    .trim()
    .matches(requiredLetterInputFieldRegex, {
      message: invalidValue,
      excludeEmptyString: true
    })
    .matches(twoCharacterInputFieldRegex, {
      message: requiredLetterInputFieldRegexMessage,
      excludeEmptyString: true
    }),
  lastName: Yup.string()
    .trim()
    .matches(requiredLetterInputFieldRegex, {
      message: invalidValue,
      excludeEmptyString: true
    })
    .matches(twoCharacterInputFieldRegex, {
      message: requiredLetterInputFieldRegexMessage,
      excludeEmptyString: true
    })
    .required(requiredFieldMessage),
  mobilePhone: Yup.string()
    .trim()
    .required(requiredFieldMessage)
    .matches(requiredDigitInputFieldRegex, {
      message: invalidValue,
      excludeEmptyString: true
    })
    .test("test-number", requiredPhoneInputFieldRegexMessage, value => {
      let isValid = digitPhoneInputFieldRegex.test(value);
      if (!isValid) {
        return false;
      }
      return true;
    }),
  acceptsPrivacyPolicy: Yup.bool().oneOf([true], requireCheckboxMessage),
  unitNumber: Yup.string()
    .trim()
    .matches(requiredDigitOrLetterInputFieldRegex, {
      message: invalidValue,
      excludeEmptyString: true
    }),
  streetNumber: Yup.string()
    .trim()
    .required(requiredFieldMessage)
    .matches(requiredDigitOrLetterInputFieldRegex, {
      message: invalidValue,
      excludeEmptyString: true
    }),
  suburb: Yup.string()
    .trim()
    .required(requiredFieldMessage)
    .matches(requiredLetterInputFieldRegex, {
      message: invalidValue,
      excludeEmptyString: true
    }),
  street: Yup.string()
    .trim()
    .required(requiredFieldMessage),
  state: Yup.string()
    .trim()
    .required(requiredFieldMessage),
  postCode: Yup.string()
    .trim()
    .matches(requiredDigitInputFieldRegex, {
      message: invalidValue,
      excludeEmptyString: true
    }),
  emailAddress: Yup.string()
    .trim()
    .required(requiredFieldMessage)
    .test("test-name", emailInputFieldRegexMessage, value => {
      return emailInputFieldRegex.test(value);
    }),
  incomeFrequency: Yup.string()
    .trim()
    .required(requiredFieldMessage),
  totalIncome: Yup.string()
    .trim()
    .required(requiredFieldMessage)
    .test("test-MinMax", numberMinMaxInputMessage, value => {
      const isValid = value >= 100 && value <= 10000;
      return isValid;
    }),
  dateOfBirth: Yup.object().shape({
    day: Yup.string()
      .trim()
      .required(requiredFieldMessage),
    month: Yup.string()
      .trim()
      .required(requiredFieldMessage),
    year: Yup.string()
      .trim()
      .required(requiredFieldMessage)
  })
});
