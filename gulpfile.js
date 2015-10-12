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
    config         = require('./config'),
    babel          = require('gulp-babel');


gulp.task('config:bower', function(){
  gulp.src(mainBowerFiles())
    .pipe(uglify())
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest(config.js.srcVendor));
});

gulp.task('process:haml', function() {
  gulp.src(config.html.srcFiles)
    .pipe(haml())
    .on('error', function (err) {
      console.log(err);
      this.emit('end');
    })
    .pipe(gulp.dest('./'));
});

gulp.task('process:sass', function() {
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

gulp.task('process:js', function () {
    return gulp.src(config.js.srcFiles)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.js.src));
});

gulp.task('process:uglify', function() {
  return gulp.src(config.js.srcFiles)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.js.src));
});

gulp.task('process:media', function () {
  return gulp.src(config.media.srcFiles)
    .pipe(imagemin({
      progessive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.media.dest));
});

gulp.task('config:browser-sync', function() {
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
  gulp.watch(config.html.srcFiles, ['process:haml']);
  gulp.watch(config.css.srcFiles, ['process:sass']);
  gulp.watch(config.js.srcFiles, ['process:js']);
  // gulp.watch(config.media.srcFiles, ['process:media']);
  // gulp.watch('bower_components/**', ['config:bower']);
});

// Default Task
gulp.task('default', [
  'process:haml',
  'process:sass',
  'process:js',
  'config:browser-sync',
  'watch'
]);
