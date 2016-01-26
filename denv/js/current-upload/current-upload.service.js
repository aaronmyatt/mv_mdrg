// ./denv/js/current-upload/current-upload.service.js

(function() {
    'use strict';
    angular
        .module("current-upload.service", [])
        .service("currentUploadService", currentUploadService);

    currentUploadService.$inject = ["$log"];

    function currentUploadService($log) {
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
        }

        function getUpload(data) {
            $log.info("currentUploadService.getUpload() called.");
            return _upload;
        }
    }
})();
