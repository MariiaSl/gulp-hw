const { watch, series } = require("gulp");
const { style } = require("./style.js");
const { script } = require("./script.js");
const { images } = require("./img.js");
const { browserSync } = require("./serv.js");

const watchTask = () => {
  watch("./*.html").on("change", browserSync.reload);
  watch("./src/scss/*.scss").on("change", series(style, browserSync.reload));
  watch("./src/js/*.js").on("change", series(script, browserSync.reload));
  watch("./src/img/*.+(png|jpg|gif|svg)", images);
  //   cb();
};

exports.watchTask = watchTask;
