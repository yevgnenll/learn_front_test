/**
 * Created by jarvis on 2016. 12. 29..
 */
var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var reporters = require('jasmine-reporters');
var jasmineBrowser = require('gulp-jasmine-browser');
var Server = require('karma').Server;

gulp.task('jasmine', function () {
    return gulp.src([
            'js/codecoast/codecoast.js',
            '../test/spec/test_spec.js'
        ])
        .pipe(jasmineBrowser.specRunner()) 
        .pipe(jasmineBrowser.server({port:9000, reporter:[ 
            new reporters.TerminalReporter()
        ]}));
});


gulp.task('karma', function(done){
    return new Server({
        configFile : require('path').resolve('karma.conf.js')
    }, done).start();
});

gulp.task('default', ['jasmine']);