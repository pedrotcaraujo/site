/******************************************************************
4. JS TASKS
   path: scr/js/*.js
   save to: public/js/main.js
   dependence: gulp-jshint, gulp-uglify, gulp-concat, gulp-rename
*******************************************************************/

var gulp    = require('gulp'),
    config  = require('../gulp.conf.js'),
    uglify  = require('gulp-uglify'),
    jshint  = require('gulp-jshint'),
    rename  = require('gulp-rename'),
    concat  = require('gulp-concat'),
    stylish = require('jshint-stylish');


// MINIFY AND CONCAT SCRIPTS
gulp.task(config.tasks.jsmin, function() {
  
  return gulp.src('src/scripts/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.dist.scripts));
});
// LINT SCRIPTS
gulp.task(config.tasks.jslint, function() {

  return gulp.src(config.src.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest(config.dist.scripts));

});
