var should = require('should');
var xlsx2json = require('xlsx-to-json');
var fs = require('fs');

//exports = module.exports = excelProvider('input/sample_test_data.xlsx','fundbox', 'output/sample-file1.json');

var xlProvider = function() {
    this.xlUtil = function(xlPath, xlSheet, jsonFilePath) {
        xlsx2json({
            input: xlPath,
            output: jsonFilePath,
            sheet: xlSheet
        }, function(err, result) {
            if (err) {
                console.error(err);
            } else {
                result.should.be.an.instanceOf(Object)
                var outputFilename = jsonFilePath;
                fs.writeFile(outputFilename, JSON.stringify(result, null, "\t"), function(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(result);
                        console.log("JSON saved to " + outputFilename);
                    }
                });
            }
        })
    }
}
module.exports = new xlProvider();
