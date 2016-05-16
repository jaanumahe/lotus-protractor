describe('Mortgage-Calculator', function() {

    var xlProvider = require('../lib/excel-provider.js');
    var logger = require('../lib/logger');
    var common = require('../lib/common-util.js');
    var testdata = null;

    beforeEach(function(done) {
        xlProvider.xlUtil('resources/datasheet/MortCalc.xlsx', 'MC', 'resources/json-output/input-file.json');
        logger.info('successfully converted XLSX to JSON');
        setTimeout(function() {
            logger.info('converted successfully');
            done();
        }, 2000);
    });


    it('Mort-Calc', function(done) {
        testdata = require('../resources/json-output/input-file.json');
        testdata.forEach(function(readData) {
            if (readData.url !== '' && readData.flag == 'Y') {
                common.launchUrl(readData.url);
                common.textElement(readData.homeValueXpath, readData.homeValue);
                common.textElement(readData.loanAmountXpath, readData.loanAmount);
                common.textElement(readData.interestXpath, readData.interestRate);
                common.clickElement(readData.calculateButton);
                done();
            }
        });
    }, 180000);

});
