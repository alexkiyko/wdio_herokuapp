import FormAuthenticationPage from './../page/formAuthentication.page';
import formAuthenticationData from './../data/formAuthentication.data';
import elementUtil from './../util/elementUtil';
import { userPass } from './../data/user.data';

describe('Form Authentication - Positive', function () {
  this.retries(2);

  it('should load page and verify correct page header', function () {
    FormAuthenticationPage.open();
    expect(elementUtil.elementText(FormAuthenticationPage.pageHeader)).equal(formAuthenticationData.pageHeader);
  });

  it('should login with correct username and password ', function () {
    FormAuthenticationPage.login(userPass.userName, userPass.password);
    expect(elementUtil.elementText(FormAuthenticationPage.pageHeader)).equal(formAuthenticationData.secureArea);
  });

  it('should display login notification message', function () {
    expect(elementUtil.elementText(FormAuthenticationPage.notificationMsg)).equal(formAuthenticationData.notificationLoginMsg);
  });

  it('should logout', function () {
    elementUtil.doClick(FormAuthenticationPage.logoutBtn);
    expect(elementUtil.elementText(FormAuthenticationPage.pageHeader)).equal(formAuthenticationData.pageHeader);
  });

  it('should display logout notification message', function () {
    expect(elementUtil.elementText(FormAuthenticationPage.notificationMsg)).equal(formAuthenticationData.notificationLogoutMsg);
  });
});

