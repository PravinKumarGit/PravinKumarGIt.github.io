export default class LoanForm {
  constructor(data = {}, initModel = true) {
    if (initModel) {
      console.log(data, "model");
      this.inIt(data);
    }
  }

  inIt({ value: formValues, step }) {
    // step 1
    this.LoanAmount = formValues.loanAmount || null;
    this.LoanReason = formValues.reasonOfLoan || null;
    this.Title = formValues.title || null;
    this.FirstName = formValues.firstName || null;
    this.MiddleName = formValues.middleName || null;
    this.LastName = formValues.lastName || null;
    this.MobilePhone = formValues.mobileNumber || null;
    this.EmailAddress = formValues.email || null;
    this.DateOfBirth = formValues.dateOfBirth || null;
    this.AcceptsPrivacyPolicy = formValues.terms || false;
    this.UnitNumber = formValues.unitNumber || null;
    this.StreetNumber = formValues.streetNumber || null;
    this.Suburb = formValues.suburb || null;
    this.Street = formValues.street || null;
    this.State = formValues.state || null;
    this.PostCode = formValues.postCode || null;
    this.ReferralConsent = formValues.refferalConsent || false;
    this.IncomeFrequency = formValues.incomeFrequency || null;
    this.TotalIncome = formValues.totalIncome || null;
    if (step === 1) return;

    // step 2
    this.bankStatementReferralCode = formValues.bankStatementReferralCode || null;
    if (step === 2) return;

    // step 3
    this.occupation = formValues.occupation || null;
    this.employmentBasis = formValues.employmentBasis || null;
    this.employerName = formValues.employerName || null;
    this.businessName = formValues.businessName || null;
    this.employerPhone = formValues.employerPhone || null;
    this.dateStarted = formValues.dateStarted || null;
    this.nextPayDate = formValues.nextPayDate || null;
    this.numberOfDependents = formValues.numberOfDependents || null;
    this.livingSituation = formValues.livingSituation || null;
    this.partnerIncome = formValues.partnerIncome || null;
    this.residentialStatus = formValues.residentialStatus || null;
    this.weeklyEstimatedCostOfLiving =
      formValues.weeklyEstimatedCostOfLiving || null;
    this.creditCardCount = formValues.creditCardCount || null;
    if (step === 3) return;

    // step 4
    this.identificationType = formValues.identificationType || null;
    this.driversLicenceNumber = formValues.driversLicenceNumber || null;
    this.driversLicenceCardNumber = formValues.driversLicenceCardNumber || null;
    this.driversLicenceState = formValues.driversLicenceState || null;
    this.driversLicenceExpiry = formValues.driversLicenceExpiry || null;
    this.medicareName = formValues.medicareName || null;
    this.medicareNumber = formValues.medicareNumber || null;
    this.medicareReference = formValues.medicareReference || null;
    this.medicareCardColour = formValues.medicareCardColour || null;
    this.medicareDateExpiry = formValues.medicareDateExpiry || null;
    this.consentsToIdentityVerification =
      formValues.consentsToIdentityVerification || false;
    this.workContactNumber = formValues.workContactNumber || null;
    this.homePhoneNumber = formValues.homePhoneNumber || null;
    this.secondaryEmail = formValues.secondaryEmail || null;
    this.alternateContactName = formValues.alternateContactName || null;
    this.alternateContactNumber = formValues.alternateContactNumber || null;
    this.alternateRelationship = formValues.alternateRelationship || null;
    this.foreseeableChanges = formValues.foreseeableChanges || false;
    this.foreseeableChangesExplain = formValues.foreseeableChangesExplain || null;
    this.residencyStatus = formValues.residencyStatus || null;
    this.accountPk = formValues.accountPk || null;
    this.accountExternalId = formValues.accountExternalId || null;
    this.loanSecurity = formValues.loanSecurity || null;
    this.brokerExternalPartyId = formValues.brokerExternalPartyId || null;
    this.brokerExternalPartyEmployeeClientEmploymentId =
      formValues.brokerExternalPartyEmployeeClientEmploymentId || null;
    this.maritalStatus = formValues.maritalStatus || null;
    this.consentsToScoreSeeker = formValues.consentsToScoreSeeker || false;
    if (step === 4) return;
  }
}
