var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');

// Development Tasks
gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        //.pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
        .pipe(autoprefixer({
            cascade: false
        }))
        //.pipe(sourcemaps.write())
        .pipe(cleanCss())
        .pipe(gulp.dest('css')) // Outputs it in the css folder
})

// Watchers
gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
})
