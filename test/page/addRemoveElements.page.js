import Page from "./page";

class AddRemoveElementsPage extends Page {
  open(path) { super.open('add_remove_elements/'); }

  get pageHeader() { return $('//h3'); }
  get addBtn() { return $('//div[@class="example"]/button'); }

  /**
   *  Enter index of Delete button starts from 1
   * @param {Number} index
   */
  deleteBtn(index) { return $(`//div[@id="elements"]/button[${index}]`); }

}

export default new AddRemoveElementsPage();