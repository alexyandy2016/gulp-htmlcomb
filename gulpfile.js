'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    mocha = require('gulp-mocha'),
    del = require('del'),
    htmlcomb = require('./'),
    pkg = require('./package');

gulp.task('hint', function () {
  return gulp.src(['*.js', 'test/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(jscs());
});

gulp.task('comb', function () {
  return gulp.src('test/fixtures/*.html')
  .pipe(htmlcomb())
  .pipe(gulp.dest('_combed'));
});

gulp.task('test', ['comb'], function () {
  return gulp.src('test/*.js', { read: false })
  .pipe(mocha());
});

gulp.task('clean', function (cb) {
  return del(['_releases/' + pkg.version], cb);
});

gulp.task('release', ['clean'], function () {
  return gulp.src('index.js')
  .pipe(gulp.dest('_releases/' + pkg.version));
});

gulp.task('default', ['hint', 'test', 'release']);
