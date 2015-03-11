var gulp = require("gulp");
var ts = require("gulp-typescript");
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("tsModules", function(){
  gulp.src(["modules/**/*.ts", "app.ts"])
    .pipe(sourcemaps.init())
      .pipe(concat("app.ts"))
      .pipe(ts({out:"target/app.js", sortOutput: true, target:"ES5"}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("target/"));
});

gulp.task("copyIndex", function(){
  gulp.src(["index.html"])
    .pipe(gulp.dest("target/"));
});

gulp.task("watchTs", function(){
  gulp.watch(["app.ts", "modules/**/*.ts", "index.html"], ["build"]);
});

gulp.task("build", ["tsModules","copyIndex"]);
gulp.task("default", ["build","watchTs"]);
