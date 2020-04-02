import homePage from './../page/homePage.page';
import elementUtil from './../util/elementUtil';

describe('Home Page', function () {
  it('should load home page and verify correct url', function () {
    browser.url('/');
    expect(browser.getUrl()).equal(browser.options.baseUrl);
  });

  it('should verify correct text page header', function () {
    expect(elementUtil.elementText(homePage.pageHeader)).equal('Welcome to the-internet');
  });

  it('should verify correct text page subheader', function () {
    expect(elementUtil.elementText(homePage.subHeader)).equal('Available Examples');
  });

  it('should verify correct text page footer', function () {
    expect(elementUtil.elementText(homePage.footer)).equal('Powered by Elemental Selenium');
  });

  it('should verify required amount of links on page', function () {
    expect(homePage.linksAmount()).equal(44);
  });
});