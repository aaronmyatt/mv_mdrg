//./spec/e2e/upload.spec.js

var upload = require("./page_objects/upload.po.js");
var url = "http://127.0.0.1:3000";
var EC = protractor.ExpectedConditions;

describe("upload elements", function(){
    beforeEach(function(){
        browser.ignoreSynchronization = true;
        browser.driver.get(url);
        expect(browser.getLocationAbsUrl()).toBe("/view/upload");
    });

    describe('template basics', function() {
        it("should find all elements", function() {
            expect(upload.directive.isPresent()).toBeTruthy();
            expect(upload.upload_input.isPresent()).toBeTruthy();
        });
    });

    describe("file upload", function(){
        it("will display the json within the upload file", function(){
            upload.uploadFile();
            browser.wait(EC.textToBePresentInElement(upload.uploadPreview, '{ "title": "My Resume" }'), 5000);
        });
    });
});