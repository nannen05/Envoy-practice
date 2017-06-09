var gulp = require('gulp'),
	connect = require('gulp-connect'),
	compass = require('gulp-compass'),
	gutil = require('gulp-util');


const sassSources = ['styles/scss/styles.scss'];
const sassStyle = 'expanded';

gulp.task('compass', function(){
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'styles/scss',
			//image: outputDir + 'images',
			style: sassStyle
		}))
			.on('error', gutil.log)
		.pipe(gulp.dest('styles/css'))
		.pipe(connect.reload())
});

gulp.task('html', function() {
	gulp.src('*.html')
		.pipe(connect.reload())
});

gulp.task('watch' , function() {
	gulp.watch('styles/scss/*.scss', ['compass'])
	gulp.watch('*.html', ['html'])
})

gulp.task('connect', function() {
	connect.server({
		root: "/",
		livereload: true
	});
});

gulp.task('default', ['html', 'compass', 'connect', 'watch'])