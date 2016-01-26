(function() {
    "use strict";

    angular
        .module("upload.directive", [])
        .directive("rgUploadDirective", rgUploadDirective);

    rgUploadDirective.$inject = [];
    function rgUploadDirective() {
        // rgUploadDirective
        // ------------

        // Usage:
        //
        // Creates:
        //

        var directive = {
            templateUrl:"js/upload/upload-partial.html",
            bindToController: true,
            controller: controller,
            controllerAs: 'vm',
            link: link,
            restrict: "E",
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

    controller.$inject = ["$log"];
    function controller($log) {
        $log.info("rgUploadDirective has been initialized");
    }
})();