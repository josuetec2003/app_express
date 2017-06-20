const gulp = require('gulp'),
      sass = require('gulp-sass'),
      nodemon = require('gulp-nodemon')

gulp.task('sass_css', () => {
	gulp
		.src('scss/styles.scss')
		.pipe(sass())
		.pipe(gulp.dest('static/css/'))
})

gulp.task('reload', () => {
	nodemon({
		script: 'server.js'
	})
})

gulp.task('default', ['reload'])


