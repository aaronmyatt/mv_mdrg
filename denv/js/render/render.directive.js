(function() {
    "use strict";

    angular
        .module("render.directive", [
            "current-upload.service"
        ])
        .directive("grRenderDirective", grRenderDirective);

    grRenderDirective.$inject = [];

    grRenderDirective.$inject = [];
    function grRenderDirective() {
        // grRenderDirective
        // ------------

        // Usage:
        //  <gr-render-directive></gr-render-directive>
        // Creates:
        //

        var directive = {
            templateUrl:"js/render/render-partial.html",
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

    controller.$inject = ["$log", "$rootScope", "EVENT", "currentUploadService"];
    function controller($log, $rootScope, EVENT, currentUploadService) {
        $log.info("grRenderDirective has been initialized");
        var vm = this;
        $rootScope.$on(EVENT.updateUpload, function(){
            $log.info("updateUpload event received");
            vm.resume = currentUploadService.getUpload();
        });
    }
})();