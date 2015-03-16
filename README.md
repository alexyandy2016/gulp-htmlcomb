# [gulp-htmlcomb](https://github.com/fengyuanchen/gulp-htmlcomb)

> The [HTMLComb](https://github.com/fengyuanchen/htmlcomb) plugin for [Gulp](http://gulpjs.com).


## Getting Started

### Quick start

Install with [NPM](http://npmjs.org):

```shell
npm install gulp-htmlcomb
```


### Usage

```js
var gulp = require('gulp'),
    htmlcomb = require('gulp-htmlcomb');

gulp.task('htmlcomb', function () {
  return gulp.src('src/*.html')
  .pipe(htmlcomb(/*options*/))
  .pipe(gulp.dest('dist'));
});
```


### Options

See the [HTMLComb options](https://github.com/fengyuanchen/htmlcomb#options)


## [License](LICENSE.md)

Released under the [MIT](http://opensource.org/licenses/mit-license.html) license.
