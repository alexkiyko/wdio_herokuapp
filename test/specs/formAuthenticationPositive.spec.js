import formAuthentication from './../page/formAuthentication.page';
import elementUtil from './../util/elementUtil';
import { userPass } from './../data/user.data';
import formAuthenticationData from './../data/formAuthentication.data';

describe('Form Authentication', function () {
  it('should load page and verify correct url', function () {
    browser.url('login');
    expect(browser.getUrl()).equal(`${browser.options.baseUrl}login`);
  });

  it('should verify correct text page header', function () {
    expect(elementUtil.elementText(formAuthentication.pageHeader)).equal(formAuthenticationData.pageHeader);
  });

  it('should login', function () {
    formAuthentication.login(userPass.userName, userPass.password);
    expect(elementUtil.elementText(formAuthentication.pageHeader)).equal(formAuthenticationData.secureArea)
  });

  it('should display login notification message', function () {
    expect(elementUtil.elementText(formAuthentication.notificationMsg)).equal(formAuthenticationData.notificationLoginMsg)
  });

  it('should logout', function () {
    elementUtil.doClick(formAuthentication.logoutBtn);
    expect(elementUtil.elementText(formAuthentication.pageHeader)).equal(formAuthenticationData.pageHeader);
  });

  it('should display logout notification message', function () {
    expect(elementUtil.elementText(formAuthentication.notificationMsg)).equal(formAuthenticationData.notificationLogoutMsg)
  });
});

