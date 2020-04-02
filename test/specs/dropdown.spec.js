import dropdown from './../page/dropdown.page';
import dropdownData from './../data/dropdown.data';
import {expect} from "chai";
import elementUtil from "../util/elementUtil";


describe('Dropdown', () => {
  it('should load page and verify correct url', function () {
    browser.url('dropdown');
    expect(browser.getUrl()).equal(`${browser.options.baseUrl}dropdown`);
  });

  it('should verify correct text page header', function () {
    expect(elementUtil.elementText(dropdown.pageHeader)).equal(dropdownData.pageHeader);
  });

  it('option 1 should be unselected by default', function () {
    expect(dropdown.option1.isSelected()).to.be.false;
  });

  it('option 2 should be unselected by default', function () {
    expect(dropdown.option2.isSelected()).to.be.false;
  });

  it('should select option 1 from dropdown list', function () {
    dropdown.clickDropdownMenuOption1();
    expect(dropdown.option1.isSelected()).to.be.true;
  });

  it('should select option 2 from dropdown list', function () {
    dropdown.clickDropdownMenuOption2();
    expect(dropdown.option2.isSelected()).to.be.true;
  });
});