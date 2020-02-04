export default class LoanForm {
  constructor(data = {}, initModel = true) {
    if (initModel) {
      this.inIt(data);
    }
  }

  inIt(data) {
    console.log(data, "Model");
    this.LoanAmount = data.loanAmount || null;
    this.LoanReason = data.reasonOfLoan || null;
    this.Title = data.title || null;
    this.FirstName = data.firstName || null;
    this.MiddleName = data.middleName || null;
    this.LastName = data.lastName || null;
    this.MobilePhone = data.mobileNumber || null;
    this.EmailAddress = data.email || null;
    this.DateOfBirth =
      `${data.dateOfBirth.year}-${data.dateOfBirth.month}-${data.dateOfBirth.day}T00:00:00+00:00` ||
      null;
    this.AcceptsPrivacyPolicy = data.terms || false;
    this.UnitNumber = data.unitNumber || null;
    this.StreetNumber = data.streetNumber || null;
    this.Suburb = data.suburb || null;
    this.Street = data.street || null;
    this.State = data.state || null;
    this.PostCode = data.postCode || null;
    this.ReferralConsent = data.refferalConsent || false;
    this.IncomeFrequency = data.incomeFrequency || null;
    this.TotalIncome = data.totalIncome || null;

    this.bankStatementReferralCode = data.bankStatementReferralCode || null;
    this.occupation = data.occupation || null;
    this.employmentBasis = data.employmentBasis || null;
    this.employerName = data.employerName || null;
    this.businessName = data.businessName || null;
    this.employerPhone = data.employerPhone || null;
    this.dateStarted = data.dateStarted || null;
    this.nextPayDate = data.nextPayDate || null;
    this.numberOfDependents = data.numberOfDependents || null;
    this.livingSituation = data.livingSituation || null;
    this.partnerIncome = data.partnerIncome || null;
    this.residentialStatus = data.residentialStatus || null;
    this.weeklyEstimatedCostOfLiving = data.weeklyEstimatedCostOfLiving || null;
    this.creditCardCount = data.creditCardCount || null;
    this.identificationType = data.identificationType || null;
    this.driversLicenceNumber = data.driversLicenceNumber || null;
    this.driversLicenceCardNumber = data.driversLicenceCardNumber || null;
    this.driversLicenceState = data.driversLicenceState || null;
    this.driversLicenceExpiry = data.driversLicenceExpiry || null;
    this.medicareName = data.medicareName || null;
    this.medicareNumber = data.medicareNumber || null;
    this.medicareReference = data.medicareReference || null;
    this.medicareCardColour = data.medicareCardColour || null;
    this.medicareDateExpiry = data.medicareDateExpiry || null;
    this.consentsToIdentityVerification =
      data.consentsToIdentityVerification || false;
    this.workContactNumber = data.workContactNumber || null;
    this.homePhoneNumber = data.homePhoneNumber || null;
    this.secondaryEmail = data.secondaryEmail || null;
    this.alternateContactName = data.alternateContactName || null;
    this.alternateContactNumber = data.alternateContactNumber || null;
    this.alternateRelationship = data.alternateRelationship || null;
    this.foreseeableChanges = data.foreseeableChanges || false;
    this.foreseeableChangesExplain = data.foreseeableChangesExplain || null;
    this.residencyStatus = data.residencyStatus || null;
    this.accountPk = data.accountPk || null;
    this.accountExternalId = data.accountExternalId || null;
    this.loanSecurity = data.loanSecurity || null;
    this.brokerExternalPartyId = data.brokerExternalPartyId || null;
    this.brokerExternalPartyEmployeeClientEmploymentId =
      data.brokerExternalPartyEmployeeClientEmploymentId || null;
    this.maritalStatus = data.maritalStatus || null;
    this.consentsToScoreSeeker = data.consentsToScoreSeeker || false;
  }
}
