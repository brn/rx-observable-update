/**
 * @fileoverview
 * @author Taketoshi Aono
 */


const gulp = require('gulp');


/**
 * Compile typescript for commonjs
 */
gulp.task('typescript-commonjs', () => {
  const tsc = require('gulp-typescript');
  const project = tsc.createProject('tsconfig.json', {
    typescript: require('typescript'),
    traceResolution: true
  });
  return gulp.src(['index.ts'])
    .pipe(project())
    .pipe(gulp.dest('./commonjs'))
    .on('error', () => process.exit(1));
});


/**
 * Compile typescript for commonjs
 */
gulp.task('typescript-systemjs', () => {
  const tsc = require('gulp-typescript');
  const project = tsc.createProject('tsconfig.json', {
    typescript: require('typescript'),
    traceResolution: true,
    module: 'system'
  });
  return gulp.src(['index.ts'])
    .pipe(project())
    .pipe(gulp.dest('./system'))
    .on('error', () => process.exit(1));
});


gulp.task('default', ['typescript-commonjs', 'typescript-systemjs']);
