export default class LoanForm {
  constructor(data = {}, initModel = true) {
    if (initModel) {
      this.inIt(data);
    }
  }

  inIt({ values, step }) {
    // step 1
    this.source = "App Screen 1 - Basic info";
    this.loanAmount = values.loanAmount || null;
    this.loanReason = values.reasonOfLoan || null;
    this.title = values.title || null;
    this.firstName = values.firstName || null;
    this.middleName = values.middleName || null;
    this.lastName = values.lastName || null;
    this.mobilePhone = values.mobileNumber || null;
    this.emailAddress = values.email || null;
    this.dateOfBirth = values.dateOfBirth || {
      day: null,
      month: null,
      year: null
    };
    this.acceptsPrivacyPolicy = values.acceptsPrivacyPolicy || false;
    this.unitNumber = values.unitNumber || null;
    this.streetNumber = values.streetNumber || null;
    this.suburb = values.suburb || null;
    this.street = values.street || null;
    this.state = values.state || null;
    this.postCode = values.postCode || null;
    this.referralConsent = values.referralConsent || false;
    this.incomeFrequency = values.incomeFrequency || null;
    this.totalIncome = values.totalIncome || null;
    if (step === 1) return;

    // step 2
    this.source = "App Screen 2 - Bank Statements";
    this.bankStatementReferralCode = values.bankStatementReferralCode || null;
    if (step === 2) return;

    // step 3
    this.source = "App Screen 3 - Additional Info";
    this.occupation = values.occupation || null;
    this.employmentBasis = values.employmentBasis || null;
    this.employerName = values.employerName || null;
    this.businessName = values.businessName || null;
    this.employerPhone = values.employerPhone || null;
    this.dateStarted = values.dateStarted || {
      day: 1,
      month: null,
      year: null
    };
    this.nextPayDate = values.nextPayDate || {
      day: null,
      month: null,
      year: null
    };
    this.dateStartedAtCurrentAddress = values.dateStartedAtCurrentAddress || {
      day: 1,
      month: null,
      year: null
    };
    this.numberOfDependents = values.numberOfDependents || null;
    this.livingSituation = values.livingSituation || null;
    this.partnerIncome = values.partnerIncome || null;
    this.residentialStatus = values.residentialStatus || null;
    this.residentialPaymentFrequency =
      values.residentialPaymentFrequency || null;
    this.weeklyEstimatedCostOfLiving =
      values.weeklyEstimatedCostOfLiving || null;
    this.creditCardCount = values.creditCardCount || null;
    if (step === 3) return;

    // step 4
    this.source = "App Screen 4 - Thank You";
    this.identificationType = values.identificationType || null;
    this.driversLicenceNumber = values.driversLicenceNumber || null;
    this.driversLicenceCardNumber = values.driversLicenceCardNumber || null;
    this.driversLicenceState = values.driversLicenceState || null;
    this.driversLicenceExpiry = values.driversLicenceExpiry || null;
    this.medicareName = values.medicareName || null;
    this.medicareNumber = values.medicareNumber || null;
    this.medicareReference = values.medicareReference || null;
    this.medicareCardColour = values.medicareCardColour || null;
    this.medicareDateExpiry = values.medicareDateExpiry || null;
    this.consentsToIdentityVerification =
      values.consentsToIdentityVerification || false;
    this.workContactNumber = values.workContactNumber || null;
    this.homePhoneNumber = values.homePhoneNumber || null;
    this.secondaryEmail = values.secondaryEmail || null;
    this.alternateContactName = values.alternateContactName || null;
    this.alternateContactNumber = values.alternateContactNumber || null;
    this.alternateRelationship = values.alternateRelationship || null;
    this.foreseeableChanges = values.foreseeableChanges || false;
    this.foreseeableChangesExplain = values.foreseeableChangesExplain || null;
    this.residencyStatus = values.residencyStatus || null;
    this.accountPk = values.accountPk || null;
    this.accountExternalId = values.accountExternalId || null;
    this.loanSecurity = values.loanSecurity || null;
    this.brokerExternalPartyId = values.brokerExternalPartyId || null;
    this.brokerExternalPartyEmployeeClientEmploymentId =
      values.brokerExternalPartyEmployeeClientEmploymentId || null;
    this.maritalStatus = values.maritalStatus || null;
    this.consentsToScoreSeeker = values.consentsToScoreSeeker || false;
  }
}
