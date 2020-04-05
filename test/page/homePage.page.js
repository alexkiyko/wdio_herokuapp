import Page from "./page";

class HomePage extends Page {
  open(path) { super.open(browser.options.baseUrl); }

  get pageHeader() { return $('//h1'); }
  get subHeader() { return $('//h2'); }
  get footer() { return $('//div[@id="page-footer"]'); }
  get links() { return $$('//div[@id="content"]/ul/li'); }

  linksAmount() {
    return this.links.length;
  }
}

export default new HomePage();