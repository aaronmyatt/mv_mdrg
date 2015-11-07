var gulp                 = require('gulp');
var browserSync          = require('browser-sync');
var reload               = browserSync.reload;
var harp                 = require('harp');
var protractor           = require('gulp-protractor').protractor;
var webdriver_standalone = require('gulp-protractor').webdriver_standalone;
var webdriver_update     = require('gulp-protractor').webdriver_update;
var protractorQA         = require('gulp-protractor-qa');
var shell                = require('gulp-shell');
var groc                 = require("gulp-groc");
var clean                = require('gulp-clean');
var wiredep              = require('wiredep').stream;
var watch                = require('gulp-watch');

(function (){

    // Jasmine + Groc
    // --------------------

    // Leveraging the wonderful [gulp-shell](https://github.com/sun-zheng-an/gulp-shell)
    // we can simplify our gulp file by directly calling the Jasmine and Groc runners with
    // their shell commands

    // [Jasmine](http://jasmine.github.io/2.3/introduction.html)
    // While it is my belief that we can cover a lot of our testing requirements with Protractor
    // unittestings will inevitably be required when doing complex client side processing.
    // A use case of note is Angular factories/services
    gulp.task('jasmine',
              shell.task([
                  "echo running Karma",
                  "karma start karma.conf.js"
              ], {"ignoreErrors": true}));

    // [Groc](https://github.com/nevir/groc)
    // Documentation Documentation Documentation! As critical as testing. Where testing
    // enables us to test our assumptions and generate confidence in our program execution
    // documentation allows us to communicate our programs to the most important developer
    // in any project - ourselves!
    // Here we use the wonderful Groc tool which embodies [Robert Knuth's](https://en.wikipedia.org/wiki/Literate_programming)
    // literate programming discipline.
    gulp.task('docs',
        shell.task([
            'echo Building Docs',
            'groc'
        ]));

    // Harp + Browser-sync
    // ---------------------------

    // The meat of our gulpfile.
    // [Harp](http://harpjs.com/), a beautiful static server/preprocessor harmony!
    // [Browser-sync](http://www.browsersync.io/), everything Livereload can do, and more, for free!
    
    // Serve the Harp Site from the src directory
    gulp.task('serve', function () {
        harp.server("./static/", {
            port: 9001
        }, function () {
            // Drop in browser-sync
            browserSync({
                browser: "google chrome canary",
                proxy: "localhost:9001",
                open: false
                // Hide the notifications.
                // notify: {
                //     styles: ['opacity: 0', 'position: absolute']
                // }
            });

            // Once the dev server is loaded we fire off the watchers that we automate the important
            // parts of our workflow.
            gulp.watch("*.sass", function () {
                reload("./static/css/main.css", {stream: true});
            });
            gulp.watch(["./static/**/*.jade", "./static/**/*.js", "./static/**/*.json"],
                       function () {
                           reload();
                       });
            gulp.watch(["./spec/unit/**/*spec.js", "!./spec/e2e/"], ["jasmine"]);
            gulp.watch(["./static/js/**/*.js"], ["docs"]);
        });
    });
    
    // Protractor + [ProtractorQA](https://www.npmjs.com/package/gulp-protractor-qa)
    // ---------------------

    // A seemingly simple gulp package that will quickly ensure our html selectors are present
    // this should reduce the overhead from having to run protactor continuously.
    gulp.task('protractorqa', function() {
	protractorQA.init({
	    testSrc: 'spec/e2e/**/*.js',
	    viewSrc: ['./static/**/*.jade']
	});
    });

    gulp.task('webdriver_update', webdriver_update);
    gulp.task('webdriver_standalone', ["webdriver_update"], webdriver_standalone);

    gulp.task("protractor", ["webdriver_standalone"], function() {
        gulp.src("./spec/e2e/**/*spec.js")
            .pipe(protractor({
                configFile: "./conf.js",
                args: ['--baseUrl', 'http://127.0.0.1:3000']
            }))    
            .on('error', function(e) {
                throw e;
            });
    });

    watch("./static/bower_components/**/*.js", function(){
        gulp.src('./static/_layout.jade')
            .pipe(wiredep())
            .pipe(gulp.dest('./static/'));
    });

    gulp.task("wireup", function(){
        gulp.src("./static/_layout.jade")
            .pipe(wiredep())
            .pipe(gulp.dest('./static/')); 
    });

    // Finally, our default task to fire off all the goodies we care about!
    gulp.task('default', ["serve", "protractorqa", "protractor", "docs", "jasmine", "wireup"]);

})();
