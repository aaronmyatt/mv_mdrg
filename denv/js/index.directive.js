(function() {
    "use strict";

    angular
        .module("index.directive", [])
        .directive("rgIndexDirective", rgIndexDirective);

    rgIndexDirective.$inject = [];
    function rgIndexDirective() {
        // rgIndexDirective
        // ------------

        // Usage:
        //
        // Creates:
        //

        var directive = {
            templateUrl:"views.html",
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

        $log.info("rgIndexDirective has been initialized");
    }
})();