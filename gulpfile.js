var gulp = require('gulp');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');

// Path Variables
global.paths = {
  srcDir: 'src',
  destDir: 'www'
};

// Start the server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    files: paths.srcDir + "/**/*"
  });
});

gulp.task('default', ['browser-sync']);
