(function() {
    "use strict";

    angular
        .module("index.directive", [])
        .directive("grIndexDirective", grIndexDirective);

    grIndexDirective.$inject = [];
    function grIndexDirective() {
        // grIndexDirective
        // ------------

        // Usage:
        //
        // Creates:
        //

        var directive = {
            template: "View<ui-view></ui-view>",
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

        $log.info("grIndexDirective has been initialized");
    }
})();