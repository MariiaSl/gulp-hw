const { src, dest } = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const browserSync = require("browser-sync");

const script = (cb) => {
  src("./src/js/*.js")
    .pipe(concat("scripts.min.js"))
    .pipe(uglify())
    .pipe(dest("./dist/js"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  cb();
};

exports.script = script;
