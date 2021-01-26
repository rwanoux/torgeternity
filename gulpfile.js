const gulp = require('gulp');
const prefix = require('gulp-autoprefixer');
const sass = require('gulp-sass');

/* ----------------------------------------- */
/*  Compile Sass
/* ----------------------------------------- */

// Small error handler helper function.
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
} 
gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass())    // ici on utilise gulp-sass
    .pipe(gulp.dest('css'))
});