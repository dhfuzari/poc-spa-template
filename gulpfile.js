const gulp = require('gulp');
const util = require('gulp-util');
const sequence = require('run-sequence');

require('./gulpTasks/app');
require('./gulpTasks/deps');
require('./gulpTasks/server');

gulp.task('default', () => {
  if (util.env.production) {
    sequence('deps', 'app'); // An old way to run tasks sequencially
    // gulp.start('deps', 'app');
  } else {
    sequence('deps', 'app', 'server'); // An old way to run tasks sequencially
    // gulp.start('deps', 'app', 'server');
  }
})

