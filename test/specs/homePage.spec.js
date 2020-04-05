import HomePage from './../page/homePage.page';
import homePageData from './../data/homePage.data';
import elementUtil from './../util/elementUtil';

describe('Home Page', function () {
  this.retries(2);

  it('should load page and verify correct page header', function () {
    HomePage.open();
    expect(elementUtil.elementText(HomePage.pageHeader)).equal(homePageData.pageHeader);
  });

  it('should verify correct page subheader', function () {
    expect(elementUtil.elementText(HomePage.subHeader)).equal(homePageData.pageSubHeader);
  });

  it('should verify correct page footer', function () {
    expect(elementUtil.elementText(HomePage.footer)).equal(homePageData.pageFooter);
  });

  it('should verify required amount of links on page', function () {
    expect(HomePage.linksAmount()).equal(homePageData.requiredLinks);
  });
});