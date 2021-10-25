const gulp = require('gulp');
const spawn = require('child_process').spawn;
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const webp = require('imagemin-webp');
const browserSync = require('browser-sync').create();

function doSpawn(argument, cb) {
  const child = spawn('bundle exec jekyll ' + argument, { shell: true });

  child.stderr.on('data', function (data) {
    console.error('STDERR:', data.toString());
  });

  child.stdout.on('data', function (data) {
    console.log('STDOUT:', data.toString());
  });

  child.on('close', browserSync.reload).on('exit', cb);
}

gulp.task('scss', function () {
  const processors = [autoprefixer, cssnano];
  return gulp
    .src('_sass/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(concat('main.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('js', function () {
  return gulp
    .src(['assets/js/partials/**.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('imagemin', function () {
  return gulp
    .src('assets/images/original/**/*')
    .pipe(
      imagemin([webp({ quality: 50 })], {
        verbose: true,
      })
    )
    .pipe(gulp.dest('assets/images/minified'));
});

gulp.task('jekyll-serve', function (done) {
  doSpawn('serve', done);
});

gulp.task('jekyll-build', function (done) {
  doSpawn('build', done);
});

gulp.task('jekyll-clean', function (done) {
  doSpawn('clean', done);
});

gulp.task('serve', function (done) {
  browserSync.init({
    port: 4000,
    server: {
      baseDir: '_site',
    },
  });
  done();
});

gulp.task('watch', function (done) {
  gulp.watch(
    [
      '_includes/**/*.html',
      '_layouts/**/*.html',
      '_posts/**/*.md',
      'pages/**/*.md',
    ],
    gulp.series('jekyll-build')
  );
  gulp.watch(['_sass/**/*.scss'], gulp.series('scss', 'jekyll-build'));
  gulp.watch(['assets/js/partials/**/*.js'], gulp.series('js', 'jekyll-build'));
  done();
});

gulp.task('build', gulp.series('jekyll-clean', 'scss', 'js', 'jekyll-build'));

gulp.task('clean', gulp.series('jekyll-clean'));

gulp.task('default', gulp.series('serve', 'watch'));
