const path = require('path');
const gulp = require('gulp');
const conf = require('./conf');
const browserSync = require('browser-sync');
const plugins = require('gulp-load-plugins')();
const browserify = require('gulp-browserify');


(function () {
    'use strict';


    gulp.task('scripts-reload', function () {
        return buildScripts()
            .pipe(browserSync.stream());
    });

    function scriptsTask() {
        return buildScripts();
    }

    function buildScripts() {
        return gulp.src(path.join(conf.paths.src, '/**/*.js'))
            .pipe(browserify({
                debug: true,
                transform: ['babelify'],
                mangle: false
            }))
            .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));

    }

    gulp.task('scripts', scriptsTask);
})();
