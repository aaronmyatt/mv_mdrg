// Karma configuration
// Generated on Sat Nov 07 2015 14:29:10 GMT+0800 (MYT)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],
        angular: ['mocks'],


        // list of files / patterns to load in the browser
        files: [
            // bower:js
            'denv/lib/jquery/dist/jquery.js',
            'denv/lib/angular/angular.js',
            'denv/lib/ngMessage/ngMessage.js',
            'denv/lib/angular-ui-router/release/angular-ui-router.js',
            'denv/lib/ngstorage/ngStorage.js',
            'denv/lib/angular-cache/dist/angular-cache.js',
            'denv/lib/angular-bootstrap/ui-bootstrap-tpls.js',
            'denv/lib/angular-auth-interceptor/authHandler.js',
            'denv/lib/angular-animate/angular-animate.js',
            'denv/lib/angular-aria/angular-aria.js',
            'denv/lib/angular-material/angular-material.js',
            'denv/lib/angular-material-icons/angular-material-icons.min.js',
            'denv/lib/ng-file-upload/ng-file-upload.js',
            // endbower
            'denv/lib/angular-mocks/angular-mocks.js',
            'denv/js/app.js',
            'denv/js/**/*!(spec).js',
            'denv/js/**/*.spec.js'
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity,

        plugins : [
            'karma-jasmine',
            'karma-chrome-launcher'
        ]
    });
}
