class ElementUtil {
  elementText(element) {
    element.waitForDisplayed();
    return element.getText()
  }

  doClick(element) {
    element.waitForDisplayed();
    element.click();
  }

  doSetValue(element, value) {
    element.waitForDisplayed();
    element.setValue(value);
  }

  doIsDisplayed(element) {
    element.waitForDisplayed();
    return element.isDisplayed();
  }
}

module.exports = new ElementUtil();