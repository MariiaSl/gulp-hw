const { src } = require("gulp");
const clean = require("gulp-clean");

const cleanDist = () => {
  return src("./dist/**", { read: false }).pipe(clean());
};

exports.cleanDist = cleanDist;
