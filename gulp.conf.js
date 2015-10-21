/****************************************************************
  FILE DESTINATIONS (RELATIVE TO ASSESTS FOLDER)
****************************************************************/
module.exports = {

	src: {
		main: 'src',
		styles: 'src/styles/*.styl',
		scripts: 'src/scripts/**/*.js',
		imgs: 'src/imgs/*.{png,jpg,gif}',
		fonts: 'src/fonts',
		views: 'src/views'

	},
	dist: {
		styles: 'styles/',
		scripts: 'scripts/',
		imgs: 'imgs/',
		fonts: 'fonts/'
	},
	tasks: {
		imagemin: 'imagemin',
		jslint: 'jslint',
		jsmin: 'jsmin',
		jsconcat: 'jsconcat',
        jscs: 'jscs',
		styles: 'styles',
		cssmin: 'cssmin',
		cssconcat: 'cssconcat',
		html: 'html',
		imgs: 'imgs',
		browsersync: 'browsersync',
		zip: 'zip'
	},
	syncConfig: {
		files: ['styles/*.css', 'scripts/*.js', '/*.html', '/imgs/*.{png,jpg,gif}'],
		server: {
			baseDir: './',
			index: 'index.html'
		}
	}
}
