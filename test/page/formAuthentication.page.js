class FormAuthentication {
  get pageHeader() { return $('//h2'); }
  get usernameInput() { return $('//input[@id="username"]'); }
  get passwordInput() { return $('//input[@id="password"]'); }
  get submitBtn() { return $('//button[@type="submit"]'); }
  get logoutBtn() { return $('//a[@class="button secondary radius"]'); }
  get notificationMsg() { return $('//div[@id="flash"]'); }

  login(userName, password) {
    this.usernameInput.setValue(userName);
    this.passwordInput.setValue(password);
    this.submitBtn.click();
  }
}

module.exports = new FormAuthentication();