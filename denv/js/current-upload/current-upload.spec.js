// ./denv/js/current-upload/current-upload.spec.js

var service;
describe("current-upload.service", function (){
    beforeEach(module("app"));
    beforeEach(inject(function($injector){
        service = $injector.get("currentUploadService");
    }));

    describe("updateUpload", function(){
        it("sets the upload object", function(){
            service.updateUpload({"title":"my resume"});
            var upload = service.getUpload;
            expect(upload().title).toEqual("my resume");
        });
    });

    describe("getUpload", function(){
       it("returns the uploaded json object", function(){
           var upload = service.getUpload;
           expect(upload()).toEqual({});
           service.updateUpload({"title":"my resume"});
           expect(upload().title).toEqual("my resume");
       });
    });
});

