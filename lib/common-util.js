var fs = require('fs');
var logger = require('../lib/logger');

var waitShort = 5000;
exports.waitShort = waitShort;

exports.launchUrl = function(url) {
    browser.driver.get(url, 25000);
};

exports.waitForElement = function(ele) {
    browser.wait(function() {
        return browser.findElement(protractor.By.xpath(ele)).isDisplayed();
    }, 30000);
};

exports.textElement = function(elem, value) {
    this.waitForElement(elem);
browser.findElement(protractor.By.xpath(elem)).clear();
    browser.findElement(protractor.By.xpath(elem)).sendKeys(value);
};

exports.getTextOfAnElement = function(ele) {
    this.waitForElement(ele);
    var text = ele.getText();
    return text;
};

exports.clickElement = function(ele) {
    this.waitForElement(ele);
    browser.findElement(protractor.By.xpath(ele)).click();
};
exports.giveIframeFocus = function() {
    browser.switchTo().frame(browser.findElement(protractor.By.xpath('//iframe')));
};

exports.getAttributeValue = function(getAttributeLocator, attribute, value) {
    try {
        expect(getAttributeLocator.getAttribute(attribute)).toBe(value);
    } catch (err) {
        logger.log('error getting attribute value ' + err);
    }
};

exports.getBrowserLogs = function() {
    browser.manage().logs().get('browser').then(function(browserLog) {
        //    expect(browserLog.length).toEqual(0);
        if (browserLog.length) logger.error('log: ' + JSON.stringify(browserLog));
        logger.log('log: ' + require('util').inspect(browserLog));
    });
};
