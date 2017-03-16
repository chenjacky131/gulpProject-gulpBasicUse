var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task('default',function(){
	console.log('默认任务');
});
gulp.task('clean',function(){//清除dist目录底下文件
	gulp.src('dist/*').pipe(clean());
});
gulp.task('script-concat',function(){//合并js
	gulp.src('script/*.js')
	.pipe(concat('my.js'))
	.pipe(gulp.dest('script/concat'));
});
gulp.task('script-uglify',function(){// 压缩文件
	gulp.src('script/concat/*.js')
	.pipe(uglify())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('dist/js'));
})
