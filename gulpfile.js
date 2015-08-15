'use strict';

/****************************************************************
1. DEPENDENCIES
****************************************************************/

var gulp = require('gulp'),
	config = require('./gulp.conf.js'),
	header = require('gulp-header'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	requireDir = require('require-dir'),
	dir = requireDir('./tasks');

gulp.task('build', [config.tasks.styles, config.tasks.jsmin, config.tasks.imagemin, config.tasks.zip]);

gulp.task('start', [config.tasks.styles, config.tasks.html, config.tasks.imagemin, config.tasks.browsersync]);

gulp.task('default', ['start'], function () {
	gulp.watch('src/styles/**/*.styl', [config.tasks.styles, reload]);
	gulp.watch('src/scripts/*.js', [config.tasks.jsmin, reload]);
	gulp.watch('src/imgs/*.{png,jpg,gif}', [config.tasks.imagemin, reload]);
	gulp.watch('src/**/*.html', [config.tasks.html]);
	gulp.watch('public/*.html', reload);
});
