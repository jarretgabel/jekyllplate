var gulp           = require('gulp'),
    bower          = require('gulp-bower'),
    mainBowerFiles = require('main-bower-files'),
    haml           = require('gulp-ruby-haml'),
    sass           = require('gulp-sass'),
    sourcemaps     = require('gulp-sourcemaps'),
    autoprefixer   = require('gulp-autoprefixer'),
    concat         = require('gulp-concat'),
    uglify         = require('gulp-uglify'),
    browserSync    = require('browser-sync'),
    reload         = browserSync.reload,
    imagemin       = require('gulp-imagemin'),
    pngquant       = require('imagemin-pngquant'),
    config         = require('./config');

gulp.task('bower', function(){
  gulp.src(mainBowerFiles())
    .pipe(uglify())
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest(config.js.src));
});

gulp.task('haml', function() {
  gulp.src(config.html.srcFiles)
    .pipe(haml())
    .on('error', function (err) {
      console.log(err);
      this.emit('end');
    })
    .pipe(gulp.dest('./'));
});

gulp.task('sass', function() {
  gulp.src(config.css.srcFiles)
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
    .pipe(gulp.dest(config.css.src))
    .pipe(reload({stream: true}));
});

gulp.task('uglify', function() {
  return gulp.src(config.js.srcFiles)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.js.src));
});

gulp.task('imagemin', function () {
  return gulp.src(config.media.srcFiles)
    .pipe(imagemin({
      progessive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.media.dest));
});

gulp.task('browser-sync', function() {
  browserSync({
    notify: false,
    files: [
      config.css.destFiles,
      config.media.destFiles,
      config.js.destFiles,
      config.html.destFiles
    ],
    ghostMode: {
      clicks: true,
      forms: true
    },
    open: false,
    logLevel: 'debug',
    server: {
      baseDir: config.base
    }
  });
});

gulp.task('watch', function() {
  gulp.watch(config.html.srcFiles, ['haml']);
  gulp.watch(config.css.srcFiles, ['sass']);
  gulp.watch(config.js.srcFiles, ['uglify']);
  // gulp.watch(config.media.srcFiles, ['imagemin']);
  // gulp.watch('bower_components/**', ['bower']);
});

// Default Task
gulp.task('default', [
  'haml',
  'sass',
  'uglify',
  'browser-sync',
  'watch'
]);
