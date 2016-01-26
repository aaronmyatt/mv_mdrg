var gulp                 = require('gulp');
var browserSync          = require('browser-sync');
var reload               = browserSync.reload;
var harp                 = require('harp');
var protractor           = require('gulp-protractor').protractor;
var webdriver_standalone = require('gulp-protractor').webdriver_standalone;
var webdriver_update     = require('gulp-protractor').webdriver_update;
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
        ])
    );

    // Harp + Browser-sync
    // ---------------------------
    // The meat of our gulpfile.
    // [Harp](http://harpjs.com/), a beautiful static server/preprocessor harmony!
    // [Browser-sync](http://www.browsersync.io/), everything Livereload can do, and more, for free!

    // Serve the Harp Site from the src directory
    gulp.task('serve', function () {
        harp.server("./denv/", {
            port: 9001
        }, function () {
            // Drop in browser-sync
            browserSync({
                browser: "google chrome canary",
                proxy: "localhost:9001",
                open: false,
                // Hide the notifications.
                 notify: {
                     styles: ['opacity: 0', 'position: absolute', 'visibility: hidden']
                 }
            });

            // Once the dev server is loaded we fire off the watchers that automate the important
            // parts of our workflow.
            gulp.watch(["./denv/**/*.sass", "./denv/**/*.css"], function () {
                reload("./denv/css/style.css", {stream: true});
            });
            gulp.watch(["./denv/**/*.jade", "./denv/**/*.js", "./denv/**/*.json"],
                       function () {
                           reload();
                       });
            gulp.watch(["./spec/unit/**/*spec.js", "!./spec/e2e/", "./denv/js/**/*.js"], ["jasmine"]);
            gulp.watch(["./denv/js/**/*.js"], ["docs"]);
        });
    });

    // Protractor
    // ---------------------

    // Run the selenium server but not protractor. Thus we will need to run Protractor manually.
    // I prefer this method since a fresh protractor run on every file change can get cumbersome
    // and system intensive. So I prefer to run is selectively when I have changes in place that
    // warrant it.
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

    // Wiredep
    // ---------------------

    // A handy little helper to inject any bower dependencies we care about.
    watch("./denv/lib/**/*.js", function(){
        gulp.src('./denv/_layout.jade')
            .pipe(wiredep())
            .pipe(gulp.dest('./denv/'));
    });

    gulp.task("wireup", function(){
        gulp.src("./denv/_layout.jade")
            .pipe(wiredep())
            .pipe(gulp.dest('./denv/'));
        gulp.src("./karma.conf.js")
            .pipe(wiredep())
            .pipe(gulp.dest('./'));
    });

    // Finally, our default task to fire off all the goodies we care about!
    gulp.task('default', ["serve", "docs", "jasmine", "protractor", "wireup"]);

})();
