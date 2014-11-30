
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    uncss = require('gulp-uncss'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    paths = {
      sassSource: 'inc/css/style.scss',
      sassDest: 'static/css/',
      jsSource: 'inc/js/main.js',
      jsDest: 'static/js/',
      cssLibsSource: 'inc/lib/bootstrap/css/bootstrap.min.css',
      cssLibsDest: 'static/lib/bootstrap/css/',
      html: ['index.html']
    };


// Transform .scss files to .css and minify it
gulp.task('base-css', function () {
  return gulp.src(paths.sassSource)
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(gulp.dest(paths.sassDest));
});

// Compress js and add .min suffix
gulp.task('compress-js', function() {
  return gulp.src(paths.jsSource)
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest(paths.jsDest))
});

// Clean bootstrap css
gulp.task('uncss', function() {
  return gulp.src(paths.cssLibsSource)
    .pipe(uncss({
      html: paths.html
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest(paths.cssLibsDest));
});

// Watch for file changes
gulp.task('watch', function() {
  gulp.watch(paths.sassSource, ['base-css']);
  gulp.watch(paths.jsSource, ['compress-js']);
});


gulp.task('default', ['base-css', 'uncss', 'compress-js']);