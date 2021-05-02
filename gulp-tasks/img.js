const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");
const cache = require("gulp-cache");
const browserSync = require("browser-sync");

const images = (cb) => {
  src("./src/img/*.+(png|jpg|gif|svg)")
    .pipe(
      cache(
        imagemin({
          optimizationLevel: 5,
          progressive: true,
          interlaced: true,
        })
      )
    )
    .pipe(dest("./dist/images"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
  cb();
};

exports.images = images;
