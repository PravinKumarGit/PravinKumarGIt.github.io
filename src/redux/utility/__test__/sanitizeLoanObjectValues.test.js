import { sanitizeValues } from "../sanitizeLoanObjectValues";

describe("sanitizeValues", () => {
  it("should return a new object", () => {
    const originalObject = {};

    const result = runSanitizeValues(originalObject);

    expect(result).not.toBe(originalObject);
    expect(result).toStrictEqual({});
  });

  it("should not modify keys we are not editing", () => {
    const wontChange = {unUsedKeyThatDoesntMatter: "some Value"};

    const result = runSanitizeValues(wontChange);

    expect(result).toStrictEqual(wontChange);
  });

  it.each`
      key             | value         | sanitizedValue
      ${"loanReason"} | ${"BondLoan"} | ${"Bond Loan"}
    `("should map property $key's value of $value to $sanitizedValue", ({key, value, sanitizedValue}) => {
    const result = runSanitizeValues({[key]: value});

    expect(result).toStrictEqual({[key]: sanitizedValue});
  });

  const runSanitizeValues = (formKeyValues = {}) => {
    return sanitizeValues(formKeyValues);
  };
});