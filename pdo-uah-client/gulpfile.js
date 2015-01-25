var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var jshint = require('gulp-jshint');
var notify = require('gulp-notify');
var gutil = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var ngConstant = require('gulp-ng-constant');

var paths = {
    sass: ['./www/scss/**/*.scss'],
    js: ['./www/js/**/*.js', './www/js/*.js', 'config.json']
};

gulp.task('default', ['sass', 'jslint', 'config', 'watch']);

gulp.task('sass', function(done) {
    gulp.src(paths.sass)
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['> 1%'],
            cascade: false
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./www/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(concat('style.css'))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done)
        .on('error', gutil.log);
});

gulp.task('jslint', function() {
    return gulp.src(paths.js)
        .pipe(jshint()).on('error', gutil.log)
    //.pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(jshint.reporter('jshint-stylish'))
        .pipe(notify({
            message: 'Scripts verificados',
            onLast: true
        }));
});

gulp.task('config', function() {
    var env = process.env.NODE_ENV,
        host, port, route;
    
    schema = 'http://';
    if (env === 'prod') {
        host = 'IP_DEFINITIVA';
        port = 'PUERTO_DEFINITIVO';
    } else {
        host = '192.168.1.131';
        port = '8081';
    }
    gulp.src('config.json')
        .pipe(ngConstant({
            name: 'pdouah.config',
            constants: {
                CONSTANTS: {
                    host: host,
                    port: port,
                    schema: schema
                }
            }
        }))
    // Writes config.js to dist/ folder
    .pipe(gulp.dest('www/js'));
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js, ['jslint', 'config']);
});

gulp.task('install', ['git-check'], function() {
    return bower.commands.install()
        .on('log', function(data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function(done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});