import CheckboxesPage from './../page/checkboxes.page';
import checkboxesData from './../data/checkboxes.data';
import elementUtil from './../util/elementUtil';


describe('Checkboxes', function () {
  this.retries(2);

  it('should load page and verify correct page header', function () {
    CheckboxesPage.open();
    expect(elementUtil.elementText(CheckboxesPage.pageHeader)).equal(checkboxesData.pageHeader);
  });

  it('checkbox 1 should be unchecked by default', function () {
    expect(CheckboxesPage.checkbox(1).isSelected()).to.be.false;
  });

  it('should select checkbox 1', function () {
    CheckboxesPage.clickCheckbox(1);
    expect(CheckboxesPage.checkbox(1).isSelected()).to.be.true;
  });

  it('checkbox 2 should be checked by default', function () {
    expect(CheckboxesPage.checkbox(2).isSelected()).to.be.true;
  });

  it('should unselect checkbox 2', function () {
    CheckboxesPage.clickCheckbox(2);
    expect(CheckboxesPage.checkbox(2).isSelected()).to.be.false;
  });
});