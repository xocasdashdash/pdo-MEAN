/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer 
 gulp-minify-css gulp-jshint gulp-concat gulp-uglify
  gulp-imagemin gulp-notify gulp-rename gulp-livereload
   gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    nodemon = require('gulp-nodemon'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    mocha = require('gulp-mocha');

// Styles
/*
gulp.task('styles', function() {
  return gulp.src('src/styles/main.scss')
    .pipe(sass({ style: 'expanded', }))
    .pipe(autoprefixer('last 2 version',
     'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});
*/
// Scripts
gulp.task('scripts', function() {
    return gulp.src('server/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(notify({
            message: 'Scripts verificados',
            onLast: true
        }));
});


// Watch
gulp.task('watch', function() {
    // Watch .js files
    gulp.watch('server/**/*.js', ['scripts']);
    gulp.watch('server/test/*.js', ['test']);
    // Create LiveReload server
    //livereload.listen();

    // Watch any files in dist/, reload on change
    //gulp.watch(['server/**'])
    //    .on('change', livereload.changed);

});

gulp.task('serve', function() {
    nodemon({
        'script': 'server/server.js',
        env: {
            'NODE_ENV': 'development'
        },
        nodeArgs: ['--debug']

    });
});

gulp.task('test',['serve','scripts'],function() {

    return gulp.src(['server/test/test-*.js'], {
        read: false
    })
        .pipe(mocha({
            reporter: 'spec',
            globals: {
                should: require('./server/test/config-mocha')
            },
            timeout: 2000
        })).pipe(notify({
            message: 'Scripts testeados',
            onLast: true
        }));
});
gulp.task('test-watch',function(){
    gulp.watch('server/**/*.js', ['test']);
    gulp.start('test');
});

// Default task

gulp.task('default', function() {
    gulp.start('scripts');
    gulp.start('watch');
    gulp.start('serve');
});