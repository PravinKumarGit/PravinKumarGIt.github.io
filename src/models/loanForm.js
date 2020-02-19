export class LoanFormPost {
  constructor(data = {}, initModel = true) {
    if (initModel) {
      this.inIt(data);
    }
  }

  inIt({ values, step }) {
    // step 1
    this.loanAmount = values.loanAmount || null;
    this.loanReason = values.reasonOfLoan || null;
    this.title = values.title || null;
    this.firstName = values.firstName || null;
    this.middleName = values.middleName || null;
    this.lastName = values.lastName || null;
    this.mobilePhone = values.mobileNumber || null;
    this.emailAddress = values.email || null;
    this.dateOfBirth = values.dateOfBirth || null;
    this.acceptsPrivacyPolicy = values.terms || false;
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
    this.bankStatementReferralCode = values.bankStatementReferralCode || null;
    if (step === 2) return;

    // step 3
    this.occupation = values.occupation || null;
    this.employmentBasis = values.employmentBasis || null;
    this.employerName = values.employerName || null;
    this.businessName = values.businessName || null;
    this.employerPhone = values.employerPhone || null;
    this.dateStarted = values.dateStarted || null;
    this.nextPayDate = values.dateStartedAtCurrentAddress || null;
    this.numberOfDependents = values.numberOfDependents || null;
    this.livingSituation = values.livingSituation || null;
    this.partnerIncome = values.partnerIncome || null;
    this.residentialStatus = values.residentialStatus || null;
    this.weeklyEstimatedCostOfLiving =
      values.weeklyEstimatedCostOfLiving || null;
    this.creditCardCount = values.creditCardCount || null;
    if (step === 3) return;

    // step 4
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
    if (step === 4) return;
  }
}

export class LoanFormGet {
  constructor(data = {}, initModel = true) {
    if (initModel) {
      this.inIt(data);
    }
  }

  inIt({ values, step }) {
    console.log(values, step, this, 'LoanFormGet')
    // step 1
    this.loanAmount = values.loanAmount || "";
    this.reasonOfLoan = values.loanReason || "";
    this.title = values.title || "";
    this.firstName = values.firstName || "";
    this.middleName = values.middleName || "";
    this.lastName = values.lastName || "";
    this.mobilePhone = values.mobileNumber || "";
    this.emailAddress = values.email || "";
    this.dateOfBirth = values.dateOfBirth || { day: "", month: "", year: "" };
    this.terms = values.acceptsPrivacyPolicy || false;
    this.unitNumber = values.unitNumber || "";
    this.streetNumber = values.streetNumber || "";
    this.suburb = values.suburb || "";
    this.street = values.street || "";
    this.state = values.state || "";
    this.postCode = values.postCode || "";
    this.referralConsent = values.referralConsent || false;
    this.incomeFrequency = values.incomeFrequency || "";
    this.totalIncome = values.totalIncome || "";
    if (step === 1) return;

    // step 2
    this.bankStatementReferralCode = values.bankStatementReferralCode || "";
    if (step === 2) return;

    // step 3
    this.occupation = values.occupation || "";
    this.employmentBasis = values.employmentBasis || "";
    this.employerName = values.employerName || "";
    this.businessName = values.businessName || "";
    this.employerPhone = values.employerPhone || "";
    this.dateStarted = values.dateStarted || { day: 1, month: "", year: "" };
    this.dateStartedAtCurrentAddress = values.nextPayDate || { day: 1, month: "", year: "" };
    this.numberOfDependents = values.numberOfDependents || "";
    this.livingSituation = values.livingSituation || "";
    this.partnerIncome = values.partnerIncome || "";
    this.residentialStatus = values.residentialStatus || "";
    this.weeklyEstimatedCostOfLiving = values.weeklyEstimatedCostOfLiving || "";
    this.creditCardCount = values.creditCardCount || "";
    if (step === 3) return;

    // step 4
    this.identificationType = values.identificationType || "";
    this.driversLicenceNumber = values.driversLicenceNumber || "";
    this.driversLicenceCardNumber = values.driversLicenceCardNumber || "";
    this.driversLicenceState = values.driversLicenceState || "";
    this.driversLicenceExpiry = values.driversLicenceExpiry || "";
    this.medicareName = values.medicareName || "";
    this.medicareNumber = values.medicareNumber || "";
    this.medicareReference = values.medicareReference || "";
    this.medicareCardColour = values.medicareCardColour || "";
    this.medicareDateExpiry = values.medicareDateExpiry || "";
    this.consentsToIdentityVerification =
      values.consentsToIdentityVerification || false;
    this.workContactNumber = values.workContactNumber || "";
    this.homePhoneNumber = values.homePhoneNumber || "";
    this.secondaryEmail = values.secondaryEmail || "";
    this.alternateContactName = values.alternateContactName || "";
    this.alternateContactNumber = values.alternateContactNumber || "";
    this.alternateRelationship = values.alternateRelationship || "";
    this.foreseeableChanges = values.foreseeableChanges || false;
    this.foreseeableChangesExplain = values.foreseeableChangesExplain || "";
    this.residencyStatus = values.residencyStatus || "";
    this.accountPk = values.accountPk || "";
    this.accountExternalId = values.accountExternalId || "";
    this.loanSecurity = values.loanSecurity || "";
    this.brokerExternalPartyId = values.brokerExternalPartyId || "";
    this.brokerExternalPartyEmployeeClientEmploymentId =
      values.brokerExternalPartyEmployeeClientEmploymentId || "";
    this.maritalStatus = values.maritalStatus || "";
    this.consentsToScoreSeeker = values.consentsToScoreSeeker || false;
  }
}
