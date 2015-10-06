var devAssets = 'assets';
var prodAssets = '_site/assets';

module.exports = {
  base: '_site',
  html: {
    srcFiles: '_haml/**/*.haml',
    destFiles: prodAssets + '/**/*.html'
  },
  css: {
    srcFiles: devAssets + '/_sass/**/*.sass',
    destFiles: prodAssets + '/css/*.css',
    src:  devAssets + '/css/',
    dest: prodAssets + '/css/'
  },
  js: {
    srcFiles: devAssets + '/js/main.js',
    destFiles: prodAssets + '/js/*.js',
    src:  devAssets + '/js/',
    dest: prodAssets + '/js/'
  },
  media: {
    srcFiles:  devAssets + '/media/**/*.{jpg,jpeg,png,gif}',
    destFiles:  prodAssets + '/media/**/*.{jpg,jpeg,png,gif}',
    dest: prodAssets + '/media/'
  }
};