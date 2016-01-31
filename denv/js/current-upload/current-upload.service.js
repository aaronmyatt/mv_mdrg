// ./denv/js/current-upload/current-upload.service.js

(function() {
    'use strict';
    angular
        .module("current-upload.service", [])
        .constant("EVENT", {
            "updateUpload": "updateUpload"
        })
        .service("currentUploadService", currentUploadService);

    currentUploadService.$inject = ["$log", "$rootScope", "EVENT"];

    function currentUploadService($log, $rootScope, EVENT) {
        // currentUploadService
        // ------------

        //Usage
        //

        var service = this;
        var _upload = {};
        service.updateUpload = updateUpload;
        service.getUpload = getUpload;
        
        return service;

        ////////////////
        function updateUpload(data) {
            $log.info("currentUploadService.updateUpload() called.");
            _upload = data;
            $rootScope.$emit(EVENT.updateUpload, "SUCCESS");
        }

        function getUpload() {
            $log.info("currentUploadService.getUpload() called.");
            return _upload;
        }
    }
})();
