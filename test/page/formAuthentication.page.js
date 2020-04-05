import Page from "./page";
import elementUtil from './../util/elementUtil';

class FormAuthenticationPage extends Page {
  open(path) { super.open('login'); }

  get pageHeader() { return $('//h2'); }
  get usernameInput() { return $('//input[@id="username"]'); }
  get passwordInput() { return $('//input[@id="password"]'); }
  get submitBtn() { return $('//button[@type="submit"]'); }
  get logoutBtn() { return $('//a[@class="button secondary radius"]'); }
  get notificationMsg() { return $('//div[@id="flash"]'); }

  login(userName, password) {
    elementUtil.doSetValue(this.usernameInput, userName);
    elementUtil.doSetValue(this.passwordInput, password);
    elementUtil.doClick(this.submitBtn);
  }
}

export default new FormAuthenticationPage();