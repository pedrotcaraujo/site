/***************************************************************
   STYLES TASK
   path: scr/stylus/*.styl
   save to: public/css/style.css
   dependence: gulp-stylus, gulp-plumber, gulp-minify-css
***************************************************************/

var gulp = require('gulp'),
	gulpif = require('gulp-if'),
	stylus = require('gulp-stylus'),
	pkg = require('../package.json'),
	config = require('../gulp.conf.js'),
	header = require('gulp-header'),
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber'),
	minifycss = require('gulp-minify-css'),
	env = require('minimist')(process.argv.slice(2));

gulp.task(config.tasks.styles, function () {
	return gulp.src(config.src.styles)
		.pipe(plumber())
		.pipe(stylus({compress: env.p}))
		.pipe(gulp.dest(config.dist.styles));
});

function banner() {
	var stamp = [
		'/**',
		' * <%= pkg.name %> - <%= pkg.description %>',
		' * @author <%= pkg.author.name %> <<%= pkg.author.email %>>',
		' * @version v<%= pkg.version %>',
		' * @link <%= pkg.homepage %>',
		' * @license <%= pkg.license %>',
		' */',
		''
	].join('\n');

	return header(stamp, {
		pkg: pkg
	});
}
