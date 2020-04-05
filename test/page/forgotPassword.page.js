import Page from "./page";
import elementUtil from './../util/elementUtil';

class ForgotPasswordPage extends Page {
  open(path) { super.open('forgot_password'); }

  get pageHeader() { return $('//h2'); }
  get emailInput() { return $('//input[@id="email"]'); }
  get submitBtn() { return $('//button[@id="form_submit"]'); }
  get confirmationMsg() { return $('//div[@id="content"]'); }

  submitForgotPasswordForm(email) {
    elementUtil.doSetValue(this.emailInput, email);
    elementUtil.doClick(this.submitBtn);
  }
}

export default new ForgotPasswordPage();