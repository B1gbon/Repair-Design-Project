const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./src/"
      }
  });
  watch("./**/*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};

function serveSass() {
  return src("./src/sass/**/*.sass", "./src/sass/**/*.scss")
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(dest("src/css/"))
      .pipe(browserSync.stream());
};

exports.serve = bs;