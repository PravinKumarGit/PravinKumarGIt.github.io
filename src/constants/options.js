export const LOAN_REASON_OPTIONS = Object.freeze([
  { label: "Bond Loan", value: "Bond Loan" },
  { label: "Household Bills", value: "Household Bills" },
  { label: "Travel Holiday", value: "Travel Holiday" },
  { label: "Vehicle Purchase", value: "Vehicle Purchase" },
  { label: "Consolidate Debt", value: "Consolidate Debt" },
  { label: "Home Renovations", value: "Home Renovations" },
  { label: "Furniture Appliances", value: "Furniture Appliances" },
  { label: "Funeral Expenses", value: "Funeral Expenses" },
  { label: "Wedding Expenses", value: "Wedding Expenses" },
  { label: "Medical/Dental Costs", value: "Medical/Dental Costs" },
  { label: "Training For Me", value: "Training For Me" },
  { label: "Education For Children", value: "Education For Children" },
  { label: "Car Repairs", value: "Car Repairs" },
  { label: "Other", value: "Other" }
]);

export const NAME_PREFIX = Object.freeze([
  { label: "Mr", value: "Mr" },
  { label: "Mrs", value: "Mrs" },
  { label: "Ms", value: "Ms" },
  { label: "Miss", value: "Miss" }
]);

export const INCOME_FREQUENCY_OPTIONS = Object.freeze([
  { label: "Weekly", value: "Weekly" },
  { label: "Fortnightly", value: "Fortnightly" },
  { label: "Monthly", value: "Monthly" }
]);

export const DAYS = (() => {
  const Days = [];
  for (let i = 1; i < 32; i++) {
    const day = i < 10 ? `0${i}` : `${i}`;
    Days.push({ label: day, value: day });
  }
  return Object.freeze(Days);
})();
export const MONTHS = Object.freeze([
  { value: "01", label: "Jan" },
  { value: "02", label: "Feb" },
  { value: "03", label: "Mar" },
  { value: "04", label: "Apr" },
  { value: "05", label: "May" },
  { value: "06", label: "Jun" },
  { value: "07", label: "Jul" },
  { value: "08", label: "Aug" },
  { value: "09", label: "Sep" },
  { value: "10", label: "Oct" },
  { value: "11", label: "Nov" },
  { value: "12", label: "Dec" }
]);
export const YEARS = (() => {
  const years = [];
  const date = new Date();
  for (let i = date.getFullYear() - 117; i < date.getFullYear() - 17; i++) {
    years.push({ label: i, value: i });
  }
  return Object.freeze(years);
})();

export const STATE_CODE = Object.freeze([
  { label: "ACT", value: "ACT" },
  { label: "NSW", value: "NSW" },
  { label: "NT", value: "NT" },
  { label: "QLD", value: "QLD" },
  { label: "SA", value: "SA" },
  { label: "TAS", value: "TAS" },
  { label: "VIC", value: "VIC" },
  { label: "WA", value: "WA" }
]);
