'use strict';

var fs = require('fs'),
    assert = require('assert');

describe('gulp-htmlcomb', function () {
  it('should be the same (input.html)', function () {
    var expected = fs.readFileSync('test/expected/input.html'),
        combed = fs.readFileSync('_combed/input.html');

    assert.equal(combed.toString(), expected.toString());
  });

  it('should be the same (button.html)', function () {
    var expected = fs.readFileSync('test/expected/button.html'),
        combed = fs.readFileSync('_combed/button.html');

    assert.equal(combed.toString(), expected.toString());
  });
});
