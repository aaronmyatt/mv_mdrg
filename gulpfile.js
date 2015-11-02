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
        harp.server("./static/", {
            port: 9000
        }, function () {
            browserSync({
                browser: "google chrome canary",
                proxy: "localhost:9000",
                // open: false
                /* Hide the notification. It gets annoying */
                notify: {
                    styles: ['opacity: 0', 'position: absolute']
                }
            });
            /**
             * Watch for scss changes, tell BrowserSync to refresh main.css
         */        
            gulp.watch("*.sass", function () {
                reload("./static/css/main.css", {stream: true});
            });
        
            /**
             * Watch all other changes, reload the whole page
             */
            gulp.watch(["./static/**/*.jade", "./static/**/*.js", "./static/**/*.json"], function () {
                reload();
            });
        });
    });

    // e2e test notifcation https://github.com/ramonvictor/gulp-protractor-qa
    gulp.task('protractor-qa', function() {
	protractorQA.init({
	    testSrc: 'test/e2e/**/*spec.js',
	    viewSrc: ['./static/**/*.jade']
	});
    });

    gulp.task('default', ["serve", "protractor-qa"]);

})();
