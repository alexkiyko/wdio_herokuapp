import Page from "./page";

class DropdownPage extends Page {
  open(path) { super.open('dropdown'); }

  get pageHeader() { return $('//h3'); }
  get dropdownMenu() { return $('//select[@id="dropdown"]'); }
  get option1() { return $('//option[contains(text(),"Option 1")]'); }
  get option2() { return $('//option[contains(text(),"Option 2")]'); }

  clickDropdownMenuOption1() {
    this.dropdownMenu.waitForDisplayed();
    this.dropdownMenu.selectByIndex(1);
  }

  clickDropdownMenuOption2() {
    this.dropdownMenu.waitForDisplayed();
    this.dropdownMenu.selectByIndex(2);
  }
}

export default new DropdownPage();