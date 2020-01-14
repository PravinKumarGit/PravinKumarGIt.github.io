export default class LoanAmount {
  constructor(data = {}, initModel = true) {
    if (initModel) {
      this.inIt(data);
    }
  }

  inIt(data) {
    this.label = data;
    this.value = data;
  }
}
