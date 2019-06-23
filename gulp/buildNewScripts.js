const gulp = require('gulp');
const parcel = require('gulp-parcel');

module.exports = function buildScripts() {
  console.log('building scripts');
  return gulp
    .src('./src/scripts/main.js', { read: false })
    .pipe(parcel({ source: './src/scripts/main.js' }))
    .pipe(gulp.dest(`./src/sources/assets/scripts`));
};
