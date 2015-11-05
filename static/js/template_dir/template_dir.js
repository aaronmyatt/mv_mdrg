(function() {
    'use strict';

    angular
        .module('app')
        .directive('templateDirective', templateDirective);

    templateDirective.$inject = [];
    function templateDirective() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            templateUrl: "/js/template_dir/template",
            bindToController: true,
            controller: controller,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

    controller.$inject = ["$log"];
    function controller($log) {
        
        $log.info("templateDirective initialized");
    }
})();
