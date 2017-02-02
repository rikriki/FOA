import gulp        from 'gulp';
import rename from 'gulp-rename'
gulp.task('sample', function(){
  	return gulp.src('./node_modules/bootstrap-sass/assets/stylesheets/**/*.scss')
  	.pipe(rename(function(path){
  		path.basename =path.basename.substring(1)
  	}))
  	.pipe(gulp.dest('app/styles'))
});


