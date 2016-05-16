var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  framework: 'jasmine2',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  chromeDriver: 'node_modules/protractor/selenium/chromedriver',
  seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',
  //seleniumServerJar: './selenium-server-standalone-2.50.1.jar',
  specs: ['spec/**/*.js'],
  idleTimeout: 120,
  getPageTimeout: 12000,
  allScriptsTimeout: 12000,

  onPrepare: function() {
    browser.driver.get('http://www.google.com/');
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
    jasmine.getEnv().defaultTimeoutInterval = 120000;
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			savePath: 'reports/',
      takeScreenshots: true,
      screenshotsFolder: 'images',
      takeScreenshotsOnlyOnFailures: false,
      fixedScreenshotName: true,
      filePrefix: 'FundBox-Report',
      consolidate: true,
      consolidateAll: true
		}));
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 300000,
    showColors: true
  }
}
