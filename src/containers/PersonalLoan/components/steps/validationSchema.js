/* eslint-disable no-useless-escape */
import * as Yup from "yup";

const requiredFieldMessage = "is required";
const invalidValue = "not a valid value";
const requiredLetterInputFieldRegexMessage = "Value entered must be minimum 2 characters.";

const requiredLetterInputFieldRegex = /^[A-Za-z ]+$/;
const requiredDigitInputFieldRegex = /^[0-9]+$/;
const requiredDigitOrLetterInputFieldRegex = /^[0-9A-Za-z ]+$/;
const twoCharacterInputFieldRegex = /^[A-Za-z ]{2,}$/;

export default Yup.object({
  title: Yup.string()
    .trim()
    .required(requiredFieldMessage),
  // loanAmount validations - required field
  loanAmount: Yup.string()
    .trim()
    .required(requiredFieldMessage),
  // loanAmount validations - required field
  reasonOfLoan: Yup.string()
    .trim()
    .required(requiredFieldMessage),
  // // name validations - Alphabet only, required field
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
  // name validations =  Alphabet only, required field
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
  // name validations =  Alphabet only, required field
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
  mobileNumber: Yup.string()
    .trim()
    .required(requiredFieldMessage)
    .matches(requiredDigitInputFieldRegex, {
      message: invalidValue,
      excludeEmptyString: true
    })
    .test(
      "test-number",
      "Please enter a valid mobile number 10 digit start with 04.",
      value => {
        const Regex = /^04\d{8}$/;
        let isValid = Regex.test(value);
        if (!isValid) {
          return false;
        }
        return true;
      }
    ),
  terms: Yup.bool().oneOf([true], "Field must be checked"),
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
  // email validations =  Alphabet only, required field
  email: Yup.string()
    .trim()
    .required(requiredFieldMessage)
    .test("test-name", "Please enter a valid email address", value => {
      const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return emailRegex.test(value);
    }),
  incomeFrequency: Yup.string()
    .trim()
    .required(requiredFieldMessage),
  totalIncome: Yup.string()
    .trim()
    .required(requiredFieldMessage)
    .test("test-MinMax", "Please enter minimum 100 maximum 10000.", value => {
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
