/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer 
 gulp-minify-css gulp-jshint gulp-concat gulp-uglify
  gulp-imagemin gulp-notify gulp-rename gulp-livereload
   gulp-cache del --save-dev
 */
'use strict';
// Load plugins
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    notify = require('gulp-notify'),
    nodemon = require('gulp-nodemon'),
    mocha = require('gulp-mocha');
var debug = require('gulp-debug');
// Scripts
gulp.task('scripts', function() {
    return gulp.src(['server/app/**/*.js','!./server/app/fixtures/**/*'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(notify({
            message: 'Scripts verificados',
            onLast: true
        }));
});


// Watch
gulp.task('watch', function() {
    // Watch .js files
    gulp.watch('server/app/**/*.js', ['scripts']);
    //gulp.watch('server/test/*.js', ['test']);
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
            'NODE_ENV': 'development',
            'ENVIRONMENT': 'dev'
        },
        ignore: ['server/test/*', '*node_modules*','node_modules/*'],
        nodeArgs: ['--debug']
    });
});

gulp.task('test', function() {

    return gulp.src(['server/test/**/test*.js'], {
        read: false
    })
        .pipe(mocha({
            reporter: 'spec',
            globals: {
                should: require('./server/test/config-mocha')
            },
            bail:true,
            timeout: 2000,
            slow: 1
        })).pipe(notify({
            message: 'Scripts testeados',
            onLast: true
        }));
});
gulp.task('test-watch', function() {
    gulp.watch('server/test/**/*.js', ['test']);
    gulp.start('test');
});

// Default task
gulp.task('default', function() {
    gulp.start('scripts');
    gulp.start('watch');
    gulp.start('serve');
});