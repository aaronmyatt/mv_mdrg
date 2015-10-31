var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var harp        = require('harp');
var protractorQA = require('gulp-protractor-qa');

(function (){
    /**
     * Serve the Harp Site from the src directory
     */
    gulp.task('serve', function () {
        harp.server("./static", {
            port: 9000
        }, function () {
            browserSync({
                proxy: "localhost:9000",
                open: false,
                /* Hide the notification. It gets annoying */
                notify: {
                    styles: ['opacity: 0', 'position: absolute']
                }
            });
        });
        gulp.watch("*.sass", function () {
            reload("./static/css/main.css", {stream: true});
        });
        /**
         * Watch for all other changes, reload the whole page
         */
        gulp.watch(["./static/**/*.jade", "./static./**/*.js"], function () {
            reload();
        });

        /**
         * Default task, running `gulp` will fire up the Harp site,
         * launch BrowserSync & watch files.
         */
    });
    /**
     * Watch for scss changes, tell BrowserSync to refresh main.css
     */

    // e2e test notifcation https://github.com/ramonvictor/gulp-protractor-qa
    gulp.task('protractor-qa', function() {
	protractorQA.init({
	    testSrc: 'test/e2e/**/*spec.js',
	    viewSrc: ['./static/**/*.jade']
	});
    });

    gulp.task('default', ["serve", "protractor-qa"]);

})();
