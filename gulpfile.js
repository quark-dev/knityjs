var gulp = require('gulp');
var minify = require('gulp-minify');
var babel = require('gulp-babel');
var jshint = require('gulp-jshint');

gulp.task('default', ['scripts'], function() { });

gulp.task('scripts', function () {
	return gulp.src('./src/*.js')
		.pipe(babel())
		.pipe(minify())
		.pipe(gulp.dest('./dist/'));	
});

gulp.task('jshint', function() {
  gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
