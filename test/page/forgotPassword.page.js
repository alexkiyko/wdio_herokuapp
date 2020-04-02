class ForgotPassword {
  get pageHeader() { return $('//h2'); }
  get emailInput() { return $('//input[@id="email"]'); }
  get submitBtn() { return $('//button[@id="form_submit"]'); }
  get confirmationMsg() { return $('//div[@id="content"]'); }
}

module.exports = new ForgotPassword();