import JavaScriptAlertPage from './../page/javaScriptAlerts.page';
import javaScriptAlertData from './../data/javaScriptAlerts.data';
import elementUtil from './../util/elementUtil';


describe('Java Script Alerts', function () {
  this.retries(2);

  it('should load page and verify correct page header', function () {
    JavaScriptAlertPage.open();
    expect(elementUtil.elementText(JavaScriptAlertPage.pageHeader)).equal(javaScriptAlertData.pageHeader);
  });

  it('should get text of alert', function () {
    elementUtil.doClick(JavaScriptAlertPage.JSAlertBtn);
    expect(browser.getAlertText()).equal('I am a JS Alert');
  });

  it('should accept alert', function () {
    browser.acceptAlert();
    expect(elementUtil.elementText(JavaScriptAlertPage.result)).equal('You successfuly clicked an alert');
  });                                                        // bag -> expected (successfully)

  it('should dismiss alert', function () {
    elementUtil.doClick(JavaScriptAlertPage.JSConfirm);
    browser.dismissAlert();
    expect(elementUtil.elementText(JavaScriptAlertPage.result)).equal('You clicked: Cancel');
  });

  it('should send text to the alert', function () {
    elementUtil.doClick(JavaScriptAlertPage.JSPromt);
    browser.sendAlertText('Test text');
    expect(elementUtil.elementText(JavaScriptAlertPage.result)).equal('You entered: Test text');
  });
});
