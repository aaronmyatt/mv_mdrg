(function() {
    "use strict";

    angular
        .module("upload.directive", [
            "ngFileUpload"
        ])
        .directive('grFileSelect', grFileSelect)
        .directive("grUploadDirective", grUploadDirective);

    grFileSelect.$inject = ["$window"];
    function grFileSelect($window) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, el, attr, ctrl) {
                var fileReader = new $window.FileReader();
    
                fileReader.onload = function (data) {
                    ctrl.$setViewValue(fileReader.result);

                    if ('fileLoaded' in attr) {
                        scope.$eval(attr['fileLoaded']);
                    }
                };
    
                fileReader.onprogress = function (event) {
                    if ('fileProgress' in attr) {
                        scope.$eval(attr['fileProgress'], {'$total': event.total, '$loaded': event.loaded});
                    }
                };
    
                fileReader.onerror = function () {
                    if ('fileError' in attr) {
                        scope.$eval(attr['fileError'], {'$error': fileReader.error});
                    }
                };
    
                var fileType = attr['grFileSelect'];
    
                el.bind('change', function (e) {
                    var fileName = e.target.files[0];
    
                    if (fileType === '' || fileType === 'text') {
                        fileReader.readAsText(fileName);
                    } else if (fileType === 'data') {
                        fileReader.readAsDataURL(fileName);
                    }
                });
            }
        };
    }
    
    grUploadDirective.$inject = [];
    function grUploadDirective() {
        // grUploadDirective
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
        $log.info("grUploadDirective has been initialized");
        var vm = this;
    }
})();