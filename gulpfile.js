const gulp = require('gulp'),
      sass = require('gulp-sass'),
      nodemon = require('gulp-nodemon'),
      rename = require('gulp-rename'),
      babel = require('babelify'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream')

gulp.task('scripts', () => {
	browserify('src/index.js')
		.transform(babel)
		.bundle()
		.pipe(source('index.js'))
		.pipe(rename('app.js'))
		.pipe(gulp.dest('static/js'))
})

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


