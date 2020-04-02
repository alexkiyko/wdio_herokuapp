class HomePage {
  get pageHeader() { return $('//h1'); }
  get subHeader() { return $('//h2'); }
  get footer() { return $('//div[@id="page-footer"]'); }

  get links() { return $$('//div[@id="content"]//ul//li'); }

  linksAmount() {
    return this.links.length;
  }
}

module.exports = new HomePage();