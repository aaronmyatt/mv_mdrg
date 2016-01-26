(function() {
    "use strict";

    // App name: givereciept
    // -------------------

    // Description:
    // While the app is young we can keep routing confined to one file, however,
    // if it should grow larger we will be better served by tying routes to their
    // associated components/modules.

    angular
        .module("app.routes", ["ui.router"])
        .config(routes);


    routes.$inject = ["$stateProvider", "$urlRouterProvider"];
    function routes($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('view', {
                url: '/view',
                abstract: true,
                template: '<rg-index-directive></rg-index-directive>'
            })
            .state('view.upload', {
                url: '/upload',
                views: {
                    'view.upload': {
                        template: '<rg-upload-directive></rg-upload-directive>'
                    }
                }
            });

        //$urlRouterProvider.otherwise('/view/upload');
    }

})();
