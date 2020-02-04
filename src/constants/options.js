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
  { label: "01", value: "Jan" },
  { label: "02", value: "Feb" },
  { label: "03", value: "Mar" },
  { label: "04", value: "Apr" },
  { label: "05", value: "May" },
  { label: "06", value: "Jun" },
  { label: "07", value: "Jul" },
  { label: "08", value: "Aug" },
  { label: "09", value: "Sep" },
  { label: "10", value: "Oct" },
  { label: "11", value: "Nov" },
  { label: "12", value: "Dec" }
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
