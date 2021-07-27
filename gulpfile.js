const gulp = require("gulp");
const babel = require("gulp-babel");
const minify = require("gulp-minify");

function defaultTask(cb) {
  gulp
    .src("hello.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(minify())
    .pipe(gulp.dest("./build"));
  cb();
}

exports.default = defaultTask;
