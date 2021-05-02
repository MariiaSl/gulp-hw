const browserSync = require("browser-sync").create();
// const { watch, series } = require("gulp");
// const { style } = require("./style.js");
// const { script } = require("./script.js");
// const { images } = require("./img.js");

const serv = (cb) => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    open: true,
    // browser: "firefox",
  });

  // watch("./*.html").on("change", browserSync.reload);
  // watch("./src/scss/*.scss").on("change", series(style, browserSync.reload));
  // watch("./src/js/*.js").on("change", series(script, browserSync.reload));
  // watch("./src/img/*.+(png|jpg|gif|svg)", images);

  cb();
};

exports.serv = serv;
exports.browserSync = browserSync;
