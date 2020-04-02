import forgotPassword from './../page/forgotPassword.page';
import forgotPasswordData from './../data/forgotPassword.data';
import elementUtil from './../util/elementUtil';
import { userTest } from "../data/user.data";

describe('Forgot Password', function () {
  it('should load page and verify correct url', function () {
    browser.url('forgot_password');
    expect(browser.getUrl()).equal(`${browser.options.baseUrl}forgot_password`);
  });

  it('should verify correct text page header', function () {
    expect(elementUtil.elementText(forgotPassword.pageHeader)).equal(forgotPasswordData.pageHeader);
  });

  it('should submit email form', function () {
    elementUtil.doSetValue(forgotPassword.emailInput, userTest.email);
    elementUtil.doClick(forgotPassword.submitBtn);
    expect(elementUtil.elementText(forgotPassword.confirmationMsg)).equal(forgotPasswordData.confirmationMsg);
  });
});