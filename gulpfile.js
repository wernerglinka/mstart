const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Metalsmith build site process
const metalsmith = require('./gulp/metalsmith');
const buildStyles = require('./gulp/buildStyles');
const buildScripts = require('./gulp/buildNewScripts');
const getIcons = require('./gulp/getIcons');
const optimizeImages = require('./gulp/optimizeImages');
const createResponsiveImages = require('./gulp/createResponsiveImages');

// Function to reload the browser
function reload(done) {
  browserSync.reload();
  done();
}

// Function to watch all relevant source files and update browser accordingly
// this function is only used during site development
function watchSite(done) {
  browserSync.init({
    server: {
      baseDir: './site/',
    },
  });

  gulp.watch(
    'src/scripts/**/*.js',
    gulp.series(buildStyles, buildScripts, metalsmith, reload)
  );
  gulp.watch(
    'src/styles/**/*.scss',
    gulp.series(buildStyles, buildScripts, metalsmith, reload)
  );
  gulp.watch(
    ['src/content/*.html', 'src/content/*.njk'],
    gulp.series(buildStyles, buildScripts, metalsmith, reload)
  );

  done();
}

const buildSite = gulp.series(
  optimizeImages,
  createResponsiveImages,
  getIcons,
  buildStyles,
  buildScripts,
  metalsmith,
  watchSite
);

exports.default = buildSite;
