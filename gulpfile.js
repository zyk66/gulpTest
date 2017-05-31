var gulp=require("gulp"),
	uglify=require("gulp-uglify"),
	//sass=require("gulp-sass"),
	concat=require("gulp-concat"),
	minify=require("gulp-minify-css"),
	webserver=require("gulp-webserver"),
	connect=require("gulp-connect");

gulp.task("default",["webserver","watch"]);
gulp.task("concat",function(){
	gulp.src("./js/*.js")
	.pipe(concat("index.js"))
	.pipe(uglify())
	.pipe(gulp.dest("./dist/js"))
})
gulp.task("css",function(){
	gulp.src("./css/*.css")
	.pipe(concat("style.css"))
	.pipe(minify())
	.pipe(gulp.dest("./dist/css"))
})
gulp.task("watch",function(){
	gulp.watch("./index.html",["css","concat"])
})

gulp.task("webserver",function(){
	gulp.src("./")
	.pipe(webserver({
		port:8080,
		livereload:true
	}))
})
