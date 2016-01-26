// ./spec/e2e/page_objects/upload.po.js

var path = require("path");
var EC = protractor.ExpectedConditions;

var upload = {
    directive: element(by.tagName("gr-upload-directive")),
    uploadButton: element(by.id("uploadFileButton")),
    upload_input: element(by.css('[ng-model="vm.file"]')),
    uploadPreview: element(by.id("uploadPreview")),
    uploadFile: uploadFile
};

function uploadFile(){
    var fileToUpload = './resume.json',
        absolutePath = path.resolve(__dirname, fileToUpload);
    browser.wait(EC.presenceOf(upload.upload_input), 5000);
    upload.upload_input.sendKeys(absolutePath);
}

module.exports = upload;