/*!
 * gulp-htmlcomb
 * https://github.com/fengyuanchen/gulp-htmlcomb
 *
 * Copyright (c) 2015 Fengyuan Chen
 * Released under the MIT license
 */

'use strict';

var gutil = require('gulp-util'),
    through = require('through2'),
    RcLoader = require('rcloader'),
    HTMLComb = require('htmlcomb');

module.exports = function (options) {
  var rcLoader = new RcLoader('.htmlcombrc', options),
      htmlcomb = new HTMLComb(options);

  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-htmlcomb', 'Streaming not supported'));
      return;
    }

    rcLoader.for(file.path, function (err, options) {
      if (!err) {
        try {
          htmlcomb.setup(options);
          file.contents = new Buffer(htmlcomb.comb(String(file.contents)));
        } catch (e) {
          err = e;
        }
      }

      if (err) {
        cb(new gutil.PluginError('gulp-htmlcomb', err));
        return;
      }

      cb(null, file);
    });
  }, function (cb) {
    cb();
  });
};
