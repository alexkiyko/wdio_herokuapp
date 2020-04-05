import Page from "./page";

class CheckboxesPage extends Page {
  open () { super.open('checkboxes'); }

  get pageHeader() { return $('//h3'); }
  checkbox (index) { return $(`//form[@id="checkboxes"]/input[${index}]`); }

  /**
   * Clicks on the checkbox based on the index provided
   * @param {Number} index of the element
   */
  clickCheckbox(index) {
    this.checkbox (index).waitForDisplayed();
    this.checkbox(index).click();
  }
}

export default new CheckboxesPage();