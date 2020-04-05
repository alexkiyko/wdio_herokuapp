import DropdownPage from './../page/dropdown.page';
import dropdownData from './../data/dropdown.data';
import elementUtil from "../util/elementUtil";


describe('Dropdown', function () {
  this.retries(2);

  it('should load page and verify correct page header', function () {
    DropdownPage.open();
    expect(elementUtil.elementText(DropdownPage.pageHeader)).equal(dropdownData.pageHeader);
  });

  it('option 1 should be unselected by default', function () {
    expect(DropdownPage.option1.isSelected()).to.be.false;
  });

  it('option 2 should be unselected by default', function () {
    expect(DropdownPage.option2.isSelected()).to.be.false;
  });

  it('should select option 1 from dropdown list', function () {
    DropdownPage.clickDropdownMenuOption1();
    expect(DropdownPage.option1.isSelected()).to.be.true;
  });

  it('should select option 2 from dropdown list', function () {
    DropdownPage.clickDropdownMenuOption2();
    expect(DropdownPage.option2.isSelected()).to.be.true;
  });
});