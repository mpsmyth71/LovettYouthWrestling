/// <binding ProjectOpened='watch' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

"use strict";

var gulp = require('gulp');
var config = require('./gulp.config.js')();
var del = require('del');
var mainBower = require('main-bower-files');
var $ = require('gulp-load-plugins')({ lazy: true });

//Clean CSS Files
gulp.task('cleanCss', function () {
    log('Clean Css folder in libs');
    var files = [config.libsCS + '**/*.css', '!./libs/css/mainstyle.css'];
    clean(files);
});

//Clean JS Files
gulp.task('cleanJs', function () {
    log('Clean Js folder in libs');
    var files = [config.libsJS + '**/*.js', '!./libs/js/main.js'];
    clean(files);
});

//Clean Font Files
gulp.task('cleanFont', function () {
    log('Clean font folder in libs');
    var files = config.libsFonts + '**/*.{eot,svg,ttf,woff,woff2}';
    clean(files);
});

//Move all required JS from Bower
gulp.task('packageJS',['cleanJs'], function () {
    log('Move JS from Bower to JS folder in libs');

    return gulp.src(mainBower({
        filter: /.*\.js$/i
    }))
        .pipe($.plumber())
        .pipe(gulp.dest(config.libsJS));
});

//Move all required CSS from Bower
gulp.task('packageCss', ['cleanCss'], function () {
    log('Move CSS from Bower to CSS folder in libs');

    return gulp.src(mainBower({
        filter: /.*\.css$/i
    }))
        .pipe($.plumber())
        .pipe(gulp.dest(config.libsCS));
});

// Move fonts from Bower
gulp.task('packageFonts', ['cleanFont'], function () {
    log('Move Fonts from Bower to Fonts folder in libs');

    return gulp.src('./bower_components/**/*.{eot,svg,ttf,woff,woff2}')
        .pipe($.plumber())
        .pipe($.flatten())
        .pipe(gulp.dest(config.libsFonts));
});

gulp.task('packageAll', ['packageJS', 'packageCss', 'packageFonts']);


//JS Validation
gulp.task('vet', function () {

    log('Analyzing source with JSHint and JSCS');

    return gulp.src(config.alljs)
     .pipe($.jscs())
     .pipe($.jshint())
     .pipe($.jshint.reporter($.vsreporter));
});

//Inject JS into HTML Files
gulp.task('injectJs', function () {
    log('Wire up js into index.html');

    return gulp
        .src(config.index)
        .pipe($.plumber())
        .pipe($.inject(gulp.src(config.libsJS + '**/*.js')))
        .pipe(gulp.dest(config.client));
});

//Inject CSS into HTML Files
gulp.task('injectCss', function () {
    log('Wire up css into index.html');
    return gulp
        .src(config.index)
        .pipe($.plumber())
        .pipe($.inject(gulp.src(config.libsCS + '**/*.css')))
        .pipe(gulp.dest(config.client));
});

//Logging Function
function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}

//Clean Function
function clean(path) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path);
}



// ************ Move Less files from Bower to CSS *******************
//LESS Task
//gulp.task('packageLess', function () {
//    log('Compiling Less --> CSS');

//    return gulp
//        .src(config.less)
//        .pipe($.plumber())
//        .pipe($.less())
//        .pipe(gulp.dest(config.libsCS));
//});


// ************ Move JS and CSS for packages with no Bower files ***************
//Move Camera Css
//gulp.task('packageAdditionalCss', function () {
//    log('Move CSS from Bower to CSS folder in libs');

//    return gulp.src('!./bower_components/**/*.min.css'
//    )
//        .pipe($.plumber())
//        .pipe(gulp.dest(config.libsCS));
//});
// ************ END ***************

