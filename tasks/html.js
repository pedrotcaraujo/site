/***************************************************************
   Html min taks
***************************************************************/

var gulp = require('gulp'),
	gulpif = require('gulp-if'),
	config = require('../gulp.conf.js'),
	htmlmin = require('gulp-htmlmin'),
  plumber = require('gulp-plumber'),
	env = require('minimist')(process.argv.slice(2));

gulp.task('views', function () {
	return gulp.src('src/views/**/*.html')
		.pipe(gulpif(env.p,htmlmin({collapseWhitespace: true})))
		.pipe(gulp.dest('./public/views'))
});

gulp.task('index', function () {
		gulp.src('src/index.html')
	.pipe(gulpif(env.p,htmlmin({collapseWhitespace: true})))
	.pipe(gulp.dest('./public'))
});

gulp.task(config.tasks.html, ['views', 'index'],function(){});
