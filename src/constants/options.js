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
    Days.push({ label: day, value: i });
  }
  return Object.freeze(Days);
})();

export const MONTHS = Object.freeze([
  { value: 1, label: "Jan" },
  { value: 2, label: "Feb" },
  { value: 3, label: "Mar" },
  { value: 4, label: "Apr" },
  { value: 5, label: "May" },
  { value: 6, label: "Jun" },
  { value: 7, label: "Jul" },
  { value: 8, label: "Aug" },
  { value: 9, label: "Sep" },
  { value: 10, label: "Oct" },
  { value: 11, label: "Nov" },
  { value: 12, label: "Dec" }
]);

export const YEARS = (min = 18, max = 81, upcommingYears = false) => {
  const years = [];
  const date = new Date();
  if (upcommingYears)
    for (let i = date.getFullYear() - min; i <= date.getFullYear() + max; i++) {
      years.push({ label: i, value: i });
    }
  else
    for (let i = date.getFullYear() - min; i > date.getFullYear() - max; i--) {
      years.push({ label: i, value: i });
    }
  return Object.freeze(years);
};

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

export const OCCUPATION_OPTIONS = Object.freeze([
  { label: "Professional OR Executive", value: "Professional OR Executive" },
  { label: "Office Staff OR Clerical", value: "Office Staff OR Clerical" },
  { label: "Trade", value: "Trade" },
  { label: "Unskilled", value: "Unskilled" },
  { label: "Unemployed, Benefits", value: "Unemployed, Benefits" },
  { label: "Retired, Super", value: "Retired, Super" },
  { label: "All Others", value: "All Others" }
]);
export const EMPLOYMENT_OPTIONS = Object.freeze([
  { label: "Full Time Work", value: "Full Time Work" },
  { label: "Part Time Work", value: "Part Time Work" },
  { label: "Casual Work", value: "Casual Work" },
  { label: "Self Employed", value: "Self Employed" },
  { label: "Centrelink", value: "Centrelink" },
  { label: "Other", value: "Other" }
]);

export const LIVING_SITUATION_OPTIONS = Object.freeze([
  { label: "I live alone", value: "I live alone" },
  { label: "I live with friend(s)", value: "I live with friend(s)" },
  { label: "I live with my partner", value: "I live with my partner" },
  {
    label: "I live with my parents (or other relatives)",
    value: "I live with my parents (or other relatives)"
  },
  { label: "Other", value: "Other" }
]);

export const COUNT_OPTIONS = (min = 0, max = 6) => {
  const COUNT = [];
  for (let i = min; i <= max; i++) {
    if (i !== max) COUNT.push({ label: `${i}`, value: `${i}` });
    else COUNT.push({ label: `${i}+`, value: `${i}+` });
  }
  return Object.freeze(COUNT);
};

export const RESIDENTIAL_STATUS = Object.freeze([
  { label: "Renting", value: "Renting" },
  { label: "Mortgage", value: "Mortgage" },
  {
    label: "Boarding (with friends/family/relatives)",
    value: "Boarding (with friends/family/relatives)"
  },
  {
    label: "Homeowner (no mortgage owing)",
    value: "Homeowner (no mortgage owing)"
  },
  { label: "Caravan", value: "Caravan" },
  { label: "Other", value: "Other" }
]);

// once we have unit tests/later we can swap the above to use this utility
const createOption = label => ({ label, value: label });

export const RESIDENTIAL_PAYMENT_FREQUENCY = Object.freeze([
  createOption("Weekly"),
  createOption("Fortnightly"),
  createOption("Monthly")
]);

export const IDENTIFICATION_TYPE_OPTIONS = Object.freeze([
  { label: "Drivers Licence", value: "Drivers Licence" },
  { label: "Medicare", value: "Medicare" },
]);

export const STATE_OPTIONS = Object.freeze([
  { label: "ACT", value: "ACT" },
  { label: "NSW", value: "NSW" },
  { label: "NT", value: "NT" },
  { label: "QLD", value: "QLD" },
  { label: "SA", value: "SA" },
  { label: "TAS", value: "TAS" },
  { label: "VIC", value: "VIC" },
  { label: "WA", value: "WA" },
])
