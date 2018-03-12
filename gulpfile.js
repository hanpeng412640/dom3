var gulp = require('gulp')
var complesass = require('gulp-sass')
var compleless = require('gulp-less')
var connect = require('gulp-connect')
var mincss = require('gulp-clean-css')
gulp.task('cssmin', function() {
    gulp.src('./style.css')
        .pipe(mincss())
        .pipe(gulp.dest('./css/'))
})

gulp.task('httpServer', function() {
    connect.server({
        prot: 8080,
        livereload: true
    })
})
gulp.task('sass', function() {
    gulp.src('./style.sass')
        .pipe(complesass())
        .pipe(gulp.dest('./css/'))
})
gulp.task('less', function() {
    gulp.src('./style.less')
        .pipe(complesass())
        .pipe(gulp.dest('./css/'))
})