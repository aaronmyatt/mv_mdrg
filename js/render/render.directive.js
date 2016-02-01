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

    controller.$inject = ["$log", "$rootScope", "EVENT", "currentUploadService", "$http"];
    function controller($log, $rootScope, EVENT, currentUploadService, $http) {
        var vm = this;
        vm.resume = {};

        $rootScope.$on(EVENT.updateUpload, function(){
            vm.resume = currentUploadService.getUpload();
            $log.info("updateUpload event received");
        });

        function init(){
            $log.info("grRenderDirective has been initialized");

            $http.get("/resume").then(function(data){
                $log.info("Retreived example json", data);
                vm.resume = data.data;
            })
        }
        init();
    }
})();
