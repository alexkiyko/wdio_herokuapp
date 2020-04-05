import Page from "./page";

class JavaScriptAlertsPage extends Page {
  open(path) { super.open('javascript_alerts'); }

  get pageHeader() { return $('//h3'); }
  get JSAlertBtn() { return $('//button[contains(text(),"Click for JS Alert")]'); }
  get JSConfirm() { return $('//button[contains(text(),"Click for JS Confirm")]'); }
  get JSPromt() { return $('//button[contains(text(),"Click for JS Prompt")]'); }
  get result() { return $('//p[@id="result"]'); }
}

export default new JavaScriptAlertsPage();