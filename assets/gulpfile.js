// Gulp and utils
var gulp         = require('gulp'),
  gutil        = require('gulp-util'),
  size         = require('gulp-size'),
  rename       = require('gulp-rename'),
  watch        = require('gulp-watch'),
  notify       = require('gulp-notify'),
  sass         = require('gulp-ruby-sass'),
  minifycss    = require('gulp-minify-css'),
  prefix       = require('gulp-autoprefixer'),
  paths        = {
    scss: 'themes/',
    build: '../build/'
  };

// Styles
gulp.task('themes', function () {
  return sass(paths.scss, {
      sourcemap: false,
      style: 'expanded',
      stopOnError: false,
      trace: true
    })
    .on('error', gutil.log)
    .pipe(prefix({
      browsers: ['last 2 version', 'Firefox 20'],
      cascade: false
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest(paths.build))
    .pipe(size())
    .pipe(minifycss())
    .on('error', gutil.log)
    .pipe(size())
    .pipe(rename({
      suffix: '.min'
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest(paths.build))
    .pipe(notify({
      message: '[Themes] <%= file.relative %> built at <%= options.date %>',
      templateOptions: {
        date: new Date()
      }
    }));
});

// Watch
gulp.task('watch', function () {
  // Watch .scss files
  gulp.watch(paths.scss + '*.scss', ['themes']);
});

// Serve
gulp.task('serve', ['themes'], function () {
  gulp.start('watch');
});

// Build
gulp.task('build', ['themes']);

// Default task
gulp.task('default', ['build']);
