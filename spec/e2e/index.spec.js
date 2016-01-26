// ./spec/e2e/index.spec.js

var index = require("./page_objects/index.po.js");
var url = "http://127.0.0.1:3000";

describe('index/base elements', function() {

    beforeEach(function(){
        browser.ignoreSynchronization = true;
        browser.driver.get(url);
        expect(browser.getLocationAbsUrl()).toBe("/view/upload");
    });

    describe('template basics', function() {
        it("should find all elements", function() {
            expect(index.directive.isPresent()).toBeTruthy();
            index.checkMenu();
            expect(index.uiView.isPresent()).toBeTruthy();
        });
    });
});