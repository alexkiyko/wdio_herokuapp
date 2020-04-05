import Page from "./page";

class DynamicControlsPage extends Page {
  open(path) { super.open('dynamic_controls'); }

  get pageHeader() { return ($('//h4')); }
  get inputField() { return $('//form[@id="input-example"]/input'); }
  get enableDisableBtn() { return $('//form[@id="input-example"]/button'); }
  get addRemoveBtn() { return $('//form[@id="checkbox-example"]/button'); }
}

export default new DynamicControlsPage();