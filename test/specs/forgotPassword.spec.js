import ForgotPasswordPage from './../page/forgotPassword.page';
import forgotPasswordData from './../data/forgotPassword.data';
import elementUtil from './../util/elementUtil';
import { userTest } from "../data/user.data";

describe('Forgot Password', function () {
  this.retries(2);

  it('should load page and verify correct page header', function () {
    ForgotPasswordPage.open();
    expect(elementUtil.elementText(ForgotPasswordPage.pageHeader)).equal(forgotPasswordData.pageHeader);
  });

  it('should submit email form', function () {
    ForgotPasswordPage.submitForgotPasswordForm(userTest.email);
    expect(elementUtil.elementText(ForgotPasswordPage.confirmationMsg)).equal(forgotPasswordData.confirmationMsg);
  });
});