export default class LoanForm {
  constructor(data = {}, initModel = true) {
    if (initModel) {
      this.inIt(data);
    }
  }

  inIt(data) {
    console.log(data,'Model')
    this.LoanAmount = data.loanAmount || "";
    this.LoanReason = data.reasonOfLoan || "";
    this.Title = data.title || "";
    this.FirstName = data.firstName || "";
    this.MiddleName = data.middleName || "";
    this.LastName = data.lastName || "";
    this.MobilePhone = data.mobileNumber || "";
    this.EmailAddress = data.email || "";
    this.DateOfBirth =
      `${data.dateOfBirth.day}-${data.dateOfBirth.month}-${data.dateOfBirth.year}` ||
      "";
    this.AcceptsPrivacyPolicy = data.terms || "";
    this.UnitNumber = data.unitNumber || "";
    this.StreetNumber = data.streetNumber || "";
    this.Suburb = data.suburb || "";
    this.Street = data.street || "";
    this.State = data.state || "";
    this.PostCode = data.postCode || "";
    this.ReferralConsent = data.refferalConsent || "";
    this.IncomeFrequency = data.incomeFrequency || "";
    this.TotalIncome = data.totalIncome || "";
  }
}
