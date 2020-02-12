export default class LoanForm {
  constructor(data = {}, initModel = true) {
    if (initModel) {
      console.log(data, "model");
      this.inIt(data);
    }
  }

  inIt({ values, step }) {
    // step 1
    this.LoanAmount = values.loanAmount || null;
    this.LoanReason = values.reasonOfLoan || null;
    this.Title = values.title || null;
    this.FirstName = values.firstName || null;
    this.MiddleName = values.middleName || null;
    this.LastName = values.lastName || null;
    this.MobilePhone = values.mobileNumber || null;
    this.EmailAddress = values.email || null;
    this.DateOfBirth = values.dateOfBirth || null;
    this.AcceptsPrivacyPolicy = values.terms || false;
    this.UnitNumber = values.unitNumber || null;
    this.StreetNumber = values.streetNumber || null;
    this.Suburb = values.suburb || null;
    this.Street = values.street || null;
    this.State = values.state || null;
    this.PostCode = values.postCode || null;
    this.ReferralConsent = values.refferalConsent || false;
    this.IncomeFrequency = values.incomeFrequency || null;
    this.TotalIncome = values.totalIncome || null;
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
    this.nextPayDate = values.nextPayDate || null;
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
