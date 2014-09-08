var gulp = require('gulp'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    csslint = require('gulp-csslint'),
    stylish = require('jshint-stylish'),
    minifyCSS = require('gulp-minify-css'),
    livereload = require('gulp-livereload'),
    fs = require('fs');

gulp.task('style', function () {
    return gulp.src('src/style/*.less')
        .pipe(less({
            paths: [ '.', 'lib' ]
        }))
        .pipe(csslint())
        .pipe(csslint.reporter())
        .pipe(minifyCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('scripts', function() {
    return gulp.src(['src/script/lib/*.js','src/script/*.js'],
        {
            base: 'src/script/'
        })
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('copy', function() {
    return gulp.src(['src/*.html','src/img/*'], {base: 'src/'})
        .pipe(gulp.dest('.'));
});

gulp.task('build', ['copy', 'style', 'scripts'],function () {
    livereload.changed(null,{
        auto: false
    });
});

gulp.task('watch', ['build'], function() {
    livereload.listen({
        auto: true
    });
    gulp.watch(['src/*','src/script/*','src/img/*','src/style/*'],['build']);
});
