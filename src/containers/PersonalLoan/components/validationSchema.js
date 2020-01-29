/* eslint-disable no-useless-escape */
import * as Yup from "yup";
export default Yup.object({
  title: Yup.string()
    .trim()
    .required("This field is required."),
  // loanAmount validations - required field
  loanAmount: Yup.string()
    .trim()
    .required("This field is required."),
  // loanAmount validations - required field
  reasonOfLoan: Yup.string()
    .trim()
    .required("This field is required."),
  // name validations - Alphabet only, required field
  firstName: Yup.string()
    .trim()
    .matches(/^[A-Za-z ]+$/, {
      message: "not a valid value",
      excludeEmptyString: true
    })
    .matches(/^[A-Za-z ]{2,}$/, {
      message: "Value entered must be minimum 2 characters.",
      excludeEmptyString: true
    })
    .required("This field is required."),
  // name validations =  Alphabet only, required field
  middleName: Yup.string()
    .trim()
    .matches(/^[A-Za-z ]+$/, {
      message: "not a valid value",
      excludeEmptyString: true
    })
    .matches(/^[A-Za-z ]{2,}$/, {
      message: "Value entered must be minimum 2 characters.",
      excludeEmptyString: true
    })
    .required("This field is required."),
  // name validations =  Alphabet only, required field
  lastName: Yup.string()
    .trim()
    .matches(/^[A-Za-z ]+$/, {
      message: "not a valid value",
      excludeEmptyString: true
    })
    .matches(/^[A-Za-z ]{2,}$/, {
      message: "Value entered must be minimum 2 characters.",
      excludeEmptyString: true
    })
    .required("This field is required."),
  mobileNumber: Yup.string()
    .trim()
    .required("This field is required.")
    .matches(/^[0-9]+$/, {
      message: "not a valid value",
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
    .matches(/^[0-9A-Za-z ]+$/, {
      message: "not a valid value",
      excludeEmptyString: true
    }),
  streetNumber: Yup.string()
    .trim()
    .required("This field is required.")
    .matches(/^[0-9A-Za-z ]+$/, {
      message: "not a valid value",
      excludeEmptyString: true
    }),
  suburb: Yup.string()
    .trim()
    .required("This field is required.")
    .matches(/^[A-Za-z ]+$/, {
      message: "not a valid value.",
      excludeEmptyString: true
    }),
  street: Yup.string()
    .trim()
    .required("This field is required."),
  state: Yup.string()
    .trim()
    .required("This field is required."),
  postCode: Yup.string()
    .trim()
    .matches(/^[0-9]+$/, {
      message: "not a valid value.",
      excludeEmptyString: true
    }),
  // email validations =  Alphabet only, required field
  email: Yup.string()
    .trim()
    .required("This field is required.")
    .test("test-name", "Please enter a valid email address", value => {
      const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      const isValidEmail = emailRegex.test(value);
      if (!isValidEmail) return false;
      return true;
    }),
  totalIncome: Yup.string()
    .trim()
    .required("This field is required.")
    .test("test-MinMax", "Please enter minimum 100 maximum 10000.", value => {
      const isValid = value >= 100 && value <= 10000;
      if (!isValid) {
        return false;
      }
      return true;
    }),
  dateOfBirth: Yup.object().shape({
    day: Yup.string()
      .trim()
      .required("This field is required."),
    month: Yup.string()
      .trim()
      .required("This field is required."),
    year: Yup.string()
      .trim()
      .required("This field is required.")
  })
});
