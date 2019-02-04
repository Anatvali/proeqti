'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
// var cleancss = require('gulp-cleancss');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(cleancss({keepBreakes: false}))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('styles'));
});

gulp.task('watch', function () {
  gulp.watch('scss/style.scss', gulp.parallel('sass'));
});
