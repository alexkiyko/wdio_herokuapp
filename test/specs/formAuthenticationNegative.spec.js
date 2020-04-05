import FormAuthenticationPage from './../page/formAuthentication.page';
import formAuthenticationData from './../data/formAuthentication.data';
import elementUtil from './../util/elementUtil';
import { userTest, userPass } from './../data/user.data';

describe('Form Authentication - Negative', function () {
  this.retries(2);

  it('should load page and verify correct page header', function () {
    FormAuthenticationPage.open();
    expect(elementUtil.elementText(FormAuthenticationPage.pageHeader)).equal(formAuthenticationData.pageHeader);
  });

  it('should not login with incorrect username and password ', function () {
    FormAuthenticationPage.login(userTest.userName, userTest.password);
    expect(elementUtil.elementText(FormAuthenticationPage.notificationMsg)).equal(formAuthenticationData.notificationMsgInvalidUsername);
  });

  it('should not login with empty username field and correct password ', function () {
    FormAuthenticationPage.login('', userPass.password);
    expect(elementUtil.elementText(FormAuthenticationPage.notificationMsg)).equal(formAuthenticationData.notificationMsgInvalidUsername);
  });

  it('should not login with empty password field  and correct username', function () {
    FormAuthenticationPage.login(userPass.userName, '');
    expect(elementUtil.elementText(FormAuthenticationPage.notificationMsg)).equal(formAuthenticationData.notificationMsgInvalidPassword);
  });
});
