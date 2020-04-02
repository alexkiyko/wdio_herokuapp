class AddRemoveElements {

  get pageHeader() { return $('//h3'); }
  get addBtn() { return $('//div[@class="example"]/button'); }

  /**
   *  Enter index of Delete button starts from 1
   * @param {Number} index
   */
  deleteBtn(index) { return $(`//div[@id="elements"]/button[${index}]`); }

}

module.exports = new AddRemoveElements();