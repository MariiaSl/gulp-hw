const { series, parallel } = require("gulp");
// const clean = require("gulp-clean");
const { style } = require("./gulp-tasks/style.js");
const { serv } = require("./gulp-tasks/serv.js");
const { script } = require("./gulp-tasks/script.js");
const { images } = require("./gulp-tasks/img.js");
const { watchTask } = require("./gulp-tasks/watch");
const { cleanDist } = require("./gulp-tasks/clean.js");

// const cleanDist = () => {
//   return src("./dist/**", { read: false }).pipe(clean());
// };

//test1 - clean
// const build = (cb) => {
//   return cleanDist(cb);
// };
// exports.default = build;

// test2 - start style/script/img
// const build = (cb) => {
//   return series(cleanDist, style, script)(cb);
// };
// exports.default = build;

const build = (cb) => {
  return series(cleanDist, style, script, images)(cb);
};
const dev = (cb) => {
  parallel(serv, watchTask)(cb);
};

exports.default = parallel(dev, build);
