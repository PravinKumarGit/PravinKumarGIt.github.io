import { PUBLIC_ROUTE } from "../route.constants";

export const YES_NO_VALUES = {
  YES: "yes",
  NO: "no"
};

export const AGREE_NOT_AGREE_VALUES = {
  AGREE: "agree",
  NOT_AGREE: "notAgree"
};

export const THEMES = {
  default: "defaultTheme",
  rentBont: "rentBontTheme"
};

export const STEPS = [
  { step: 1, label: "Start", active: true, path: PUBLIC_ROUTE.LANDING },
  {
    step: 2,
    label: "Bank Statement",
    active: true,
    path: PUBLIC_ROUTE.BANK_STATEMENT_PAGE
  },
  {
    step: 3,
    label: "General Living",
    active: true,
    path: PUBLIC_ROUTE.GENERAL_LIVING_PAGE
  },
  { step: 4, label: "Finally", active: true, path: PUBLIC_ROUTE.FINALLY_PAGE }
];
