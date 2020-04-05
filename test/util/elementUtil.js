class ElementUtil {
  elementText(element) {
    element.waitForDisplayed(5000);
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

  doIsEnabled(element) {
    element.waitForDisplayed();
    return element.isEnabled();
  }
}

module.exports = new ElementUtil();