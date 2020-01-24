export const LOAN_REASON_OPTIONS = [
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
];

export const NAME_PREFIX = [
  { label: "Mr", value: "Mr" },
  { label: "Mrs", value: "Mrs" },
  { label: "Ms", value: "Ms" },
  { label: "Miss", value: "Miss" }
];

export const INCOME_FREQUENCY_OPTIONS = [
  { label: "Weekly", value: "Weekly" },
  { label: "Fortnightly", value: "Fortnightly" },
  { label: "Monthly", value: "Monthly" }
];

export const DAYS = (() => {
  const Days = [];
  for (let i = 1; i < 32; i++) {
    Days.push({ label: i, value: i });
  }
  return Days;
})();
export const MONTHS = [
  { label: "Jan", value: "Jan" },
  { label: "Feb", value: "Feb" },
  { label: "Mar", value: "Mar" },
  { label: "Apr", value: "Apr" },
  { label: "May", value: "May" },
  { label: "Jun", value: "Jun" },
  { label: "Jul", value: "Jul" },
  { label: "Aug", value: "Aug" },
  { label: "Sep", value: "Sep" },
  { label: "Oct", value: "Oct" },
  { label: "Nov", value: "Nov" },
  { label: "Dec", value: "Dec" }
];
export const YEARS = (() => {
  const years = [];
  for (let i = 1902; i < 2003; i++) {
    years.push({ label: i, value: i });
  }
  return years;
})();

export const STATE_CODE = [
  { label: "ACT", value: "ACT" },
  { label: "NSW", value: "NSW" },
  { label: "NT", value: "NT" },
  { label: "QLD", value: "QLD" },
  { label: "SA", value: "SA" },
  { label: "TAS", value: "TAS" },
  { label: "VIC", value: "VIC" },
  { label: "WA", value: "WA" }
];
