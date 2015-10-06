var gulp           = require('gulp');
var bower          = require('gulp-bower');
var mainBowerFiles = require('main-bower-files');
var haml           = require('gulp-ruby-haml');
var sass           = require('gulp-sass');
var sourcemaps     = require('gulp-sourcemaps');
var autoprefixer   = require('gulp-autoprefixer');
var concat         = require('gulp-concat');
var uglify         = require('gulp-uglify');
var browserSync    = require('browser-sync');
var reload         = browserSync.reload;

gulp.task('bower', function(){
  gulp.src(mainBowerFiles())
    .pipe(uglify())
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('assets/js/'));
});

gulp.task('haml', function() {
  gulp.src('_haml/**/*.haml')
    .pipe(haml())
    .on('error', function (err) {
      console.log(err);
      this.emit('end');
    })
    .pipe(gulp.dest('./'));
});

gulp.task('sass', function() {
  gulp.src('assets/_sass/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({
      indentedSyntax: true,
      outputStyle: 'compressed',
      errLogToConsole: true,
      includePaths: [
        'node_modules/susy/sass/'
      ]
    }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/css/'))
    .pipe(reload({stream: true}));
});

gulp.task('uglify', function() {
  return gulp.src('assets/js/main.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/js/'));
});

gulp.task('browser-sync', function() {
  browserSync({
    notify: false,
    files: [
      '_site/assets/css/*.css',
      '_site/assets/media/**',
      '_site/assets/js/**/*.js',
      '_site/**/*.html'
    ],
    ghostMode: {
      clicks: true,
      forms: true
    },
    open: false,
    logLevel: 'debug',
    server: {
      baseDir: '_site'
    }
  });
});

gulp.task('watch', function() {
  gulp.watch('_haml/**/*.haml', ['haml']);
  gulp.watch('assets/_sass/**/*.sass', ['sass']);
  gulp.watch('assets/js/main.js', ['uglify']);
  gulp.watch('bower_components/**', ['bower']);
});

// Default Task
gulp.task('default', [
  'bower',
  'haml',
  'sass',
  'uglify',
  'browser-sync',
  'watch'
]);
