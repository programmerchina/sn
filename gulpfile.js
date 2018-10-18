const gulp = require("gulp"),
htmlmin = require("gulp-htmlmin");
gulp.task('html',function(){
	gulp.src("dsxm/**/*.html")
	.pipe(htmlmin({collapseWhitespace:true,minifyJS:true,minifyCSS:true}))
	.pipe(gulp.dest("dist"))
})