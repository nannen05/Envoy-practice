var gulp = require('gulp'),
	connect = require('gulp-connect'),
	compass = require('gulp-compass'),
	gutil = require('gulp-util');
	browserify = require('browserify');
	babelify = require('babelify');
	source = require('vinyl-source-stream');


const sassSources = ['styles/scss/styles.scss', 'bourbon/*.scss'];
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

gulp.task('js', function () {
  browserify({
    entries: 'index.js',
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify.configure({
    presets: ["es2015", "react"]
  }))
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('watch' , function() {
	gulp.watch('styles/scss/*.scss', ['compass'])
	gulp.watch('*.js', ['js'])
	gulp.watch('*.html', ['html'])
})

gulp.task('connect', function() {
	connect.server({
		root: "/",
		livereload: true
	});
});

gulp.task('default', ['html','js', 'compass', 'connect', 'watch'])
