var gulp        = require('gulp');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var rsp = require('remove-svg-properties').stream;
var svgSprite = require('gulp-svg-sprite');

/**
 * Compile styles
 */

 var config = {
   sassPath: '.src/sass',
   bowerDir: './bower_components'
 }
gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass({
          includePaths: [
            config.bowerDir
          ]
        }).on('error', sass.logError))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('./css'))
});

/**
 * SvgSprite Config
 */

var svgConfig = {
  mode: {
    symbol: { // symbol mode to build the SVG
      inline: true, // Prepare for inline embedding, adds display none;
      dest: 'sprite', // destination folder
      prefix: "mo-svg-%s",
      sprite: 'sprite.svg', //sprite name
      example: true, // Build sample page
      bust: false,
      render: {
        scss: false,
      }
    }
  },
  svg: {
    xmlDeclaration: false, // strip out the XML attribute
    doctypeDeclaration: false // don't include the !DOCTYPE declaration
  }
};

gulp.task('svg', function() {
  gulp.src("assets/svg/*.svg" )
  .pipe(rsp.remove({
      properties: [rsp.PROPS_FILL]
  }))
  .pipe(svgSprite(svgConfig))
  .pipe(gulp.dest("_includes/"))
});

/**
* Watch scss files for changes & recompile
* Watch html/md files, run jekyll & reload BrowserSync
*/
gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch', 'svg']);
