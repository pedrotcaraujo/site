/******************************************************************
4. JS TASKS
   path: scr/js/*.js
   save to: public/js/main.js
   dependence: gulp-jshint, gulp-uglify, gulp-concat, gulp-rename
*******************************************************************/

var gulp = require('gulp'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	stylish = require('jshint-stylish'),
	config = require('../gulp.conf.js'),
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber'),
  ngAnnotate = require('gulp-ng-annotate'),
	env = require('minimist')(process.argv.slice(2));

// minify all js files that shold not be concatinated
gulp.task(config.tasks.jsmin, function () {
	return gulp.src(config.src.scripts)
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
  	.pipe(ngAnnotate({add: true, single_quotes: true}))
    .pipe(concat('app.js'))
		.pipe(gulpif(env.p,uglify()))
		.pipe(gulpif(env.p,rename({suffix: '.min'})))
		.pipe(gulp.dest('./public'));
});
