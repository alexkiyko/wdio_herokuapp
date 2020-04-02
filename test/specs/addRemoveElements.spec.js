import addRemoveElements from './../page/addRemoveElements.page';
import elementUtil from './../util/elementUtil';

describe('Add / Remove Elements', function () {
  it('should load page and verify correct url', function () {
    browser.url('add_remove_elements/');
    expect(browser.getUrl()).equal(`${browser.options.baseUrl}add_remove_elements/`);
  });

  it('should verify correct text page header', function () {
    expect(elementUtil.elementText(addRemoveElements.pageHeader)).equal('Add/Remove Elements');
  });

  it ('should not display `Delete` button', function () {
    expect(addRemoveElements.deleteBtn(1).isDisplayed()).to.be.false;
  });

  it('should wait until `Delete` button exists', function () {
    elementUtil.doClick(addRemoveElements.addBtn);
    addRemoveElements.deleteBtn(1).waitForExist();
    expect(addRemoveElements.deleteBtn(1).isExisting()).to.be.true;
  });

  it('should wait for `Delete` button to not exist',  function () {
    elementUtil.doClick(addRemoveElements.deleteBtn(1));
    addRemoveElements.deleteBtn(1).waitForExist({ timeout: 500, reverse: true });
    expect(addRemoveElements.deleteBtn(1).isExisting()).to.be.false;
  });

});