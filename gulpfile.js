const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./src/"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};

function serveSass() {
  return src("./src/sass/*.sass")
      .pipe(sass())
      .pipe(dest("src/css/"))
      .pipe(browserSync.stream());
};

exports.serve = bs;