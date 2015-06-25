var gulp = require('gulp'),
    ts = require('gulp-typescript');

gulp.task('build', buildTS);

function buildTS() {
  var tsResult = gulp
    .src('src/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        target: 'ES5',
        out: 'typescript-workshop.js'
      }));
  return tsResult.js.pipe(gulp.dest('dist'));
}