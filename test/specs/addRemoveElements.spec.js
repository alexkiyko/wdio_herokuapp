import AddRemoveElementsPage from './../page/addRemoveElements.page';
import addRemoveElementsData from './../data/addRemoveElements.data';
import elementUtil from './../util/elementUtil';

describe('Add / Remove Elements', function () {
  this.retries(2);

  it('should load page and verify correct page header', function () {
    AddRemoveElementsPage.open();
    expect(elementUtil.elementText(AddRemoveElementsPage.pageHeader)).equal(addRemoveElementsData.pageHeader);
  });

  it ('should not display `Delete` button', function () {
    expect(AddRemoveElementsPage.deleteBtn(1).isDisplayed()).to.be.false;
  });

  it('should wait until `Delete` button exists', function () {
    elementUtil.doClick(AddRemoveElementsPage.addBtn);
    AddRemoveElementsPage.deleteBtn(1).waitForExist();
    expect(AddRemoveElementsPage.deleteBtn(1).isExisting()).to.be.true;
  });

  it('should wait for `Delete` button to not exist',  function () {
    elementUtil.doClick(AddRemoveElementsPage.deleteBtn(1));
    AddRemoveElementsPage.deleteBtn(1).waitForExist({ timeout: 500, reverse: true });
    expect(AddRemoveElementsPage.deleteBtn(1).isExisting()).to.be.false;
  });
});