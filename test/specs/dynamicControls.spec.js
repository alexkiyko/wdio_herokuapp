import DynamicControlsPage from './../page/dynamicControls.page';
import dynamicControlsData from './../data/dynamicControls.data';
import elementUtil from "../util/elementUtil";


describe('Dynamic Controls', function () {
  this.retries(2);

  it('should load page and verify correct page header', function () {
    DynamicControlsPage.open();
    expect(elementUtil.elementText(DynamicControlsPage.pageHeader)).equal(dynamicControlsData.pageHeader);
  });

  it('input field should be disabled', function () {
    expect(elementUtil.doIsEnabled(DynamicControlsPage.inputField)).to.be.false;
  });

  it('should wait for input field to be enabled ', function () {
    elementUtil.doClick(DynamicControlsPage.enableDisableBtn);
    DynamicControlsPage.inputField.waitForEnabled({timeout: 4000});
    expect(DynamicControlsPage.inputField.isEnabled()).to.be.true;
  });

  it('should fill out input field', function () {
    DynamicControlsPage.inputField.setValue('Test text');
    expect(DynamicControlsPage.inputField.getValue()).equal('Test text');
  });

  it('should wait for input field to be disabled', function () {
    elementUtil.doClick(DynamicControlsPage.enableDisableBtn);
    DynamicControlsPage.inputField.waitForEnabled({timeout: 4000, reverse: true});
    expect(DynamicControlsPage.inputField.isEnabled()).to.be.false;
  });

  it('should wait until button text changes to `Add`', function () {
    elementUtil.doClick(DynamicControlsPage.addRemoveBtn);
    browser.waitUntil(
      () => DynamicControlsPage.addRemoveBtn.getText() === 'Add',
      { timeout: 4000, timeoutMsg: 'expect button text to change'});
    expect(DynamicControlsPage.addRemoveBtn.getText()).equal('Add');
  });

  it('should wait until button text changes `Remove`', () => {
    elementUtil.doClick(DynamicControlsPage.addRemoveBtn);
    browser.waitUntil(
      () => DynamicControlsPage.addRemoveBtn.getText() === 'Remove',
      { timeout: 4000, timeoutMsg: 'expect button text to change'});
    expect(DynamicControlsPage.addRemoveBtn.getText()).equal('Remove');
  });
});