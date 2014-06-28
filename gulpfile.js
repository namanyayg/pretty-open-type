var gulp = require("gulp");
var gutil = require('gulp-util');
var fs = require('fs');

var p = {
  stylus: require('gulp-stylus'),
  autoprefixer: require('gulp-autoprefixer'),
  jade: require('gulp-jade'),
  embedlr: require('gulp-embedlr'),
  uglify: require('gulp-uglify'),
  concat: require('gulp-concat'),
  include: require('gulp-include'),
  clean: require('gulp-clean'),
  connect: require('gulp-connect'),
  gulpif: require('gulp-if'),
  cssshrink: require('gulp-cssshrink')
}

var debug = false;




// Paths

var paths = {
  styles: {
    src: 'src/styl/*.styl',
    watch: ['src/styl/*.styl', 'src/styl/**/*.styl'],
    dest: 'site/css'
  },

  templates: {
    src: ['src/jade/*.jade', 'src/jade/**/*.jade', '!src/jade/_*.jade', '!src/jade/**/_*.jade' ],
    watch: ['src/jade/**/*.jade', 'src/jade/*.jade'],
    dest: 'site/'
  },

  scripts: {
    src: 'src/js/*.js',
    watch: ['src/js/**/*.js', 'src/js/*.js'],
    dest: 'site/js'
  }
}




// Create Server

gulp.task('connect', function() {
  p.connect.server({
    root: ['site'],
    port: 4242 || 4241 || 4240,
    livereload: true
  })
});




// Styles

gulp.task('styles', function() {

  var src = paths.styles.src;
  var dest = paths.styles.dest;
  var uglyLevel = debug ? 'expanded' : 'compress';

  gulp.src( src )
  .pipe( p.stylus({ set: [uglyLevel] }) )
  .pipe( p.autoprefixer() )
  .pipe( p.cssshrink() )
  .pipe( gulp.dest( dest ) )
  .pipe( p.connect.reload() );
});




// Templates

gulp.task('templates', function() {
  var src = paths.templates.src;
  var dest = paths.templates.dest;
  var uglyLevel = debug ? true : false;

  gulp.src( src, { base: 'src/jade/' } )
  .pipe( p.jade({ 
    pretty: uglyLevel,
    data: JSON.parse( fs.readFileSync('src/data.js', { encoding: 'utf8' }) )
  }) )
  .pipe ( p.embedlr() )
  .pipe( gulp.dest( dest ) )
  .pipe( p.connect.reload() );
}); 




// Scripts

gulp.task('scripts', function() {
  var src = paths.scripts.src;
  var dest = paths.scripts.dest;

  gulp.src( dest + '*.js', { read: false } ).pipe( p.clean() );

  gulp.src( src )
  .pipe( p.include() )
  .pipe( p.gulpif( !debug, p.uglify()) )
  .pipe( gulp.dest( dest ) )
  .pipe( p.connect.reload() );
});





// Gulp Watch

gulp.task('watch', ['connect'], function() {
  gulp.watch( paths.styles.watch, ['styles'] );
  gulp.watch( paths.templates.watch, ['templates'] );
  gulp.watch( paths.scripts.watch, ['scripts'] );
});




// Default Task

gulp.task('default', ['connect', 'watch'], function() {
  debug = debug || false;
  gulp.start('templates', 'styles', 'scripts');
});



// Debug Task

gulp.task('debug', function() {
  debug = true;
  gutil.log( gutil.colors.green('RUNNING IN DEBUG MODE') );
  gulp.start('default');
});