import gulp        from 'gulp';
import rename from 'gulp-rename'
gulp.task('samplejs', () =>{
  	return gulp.src('./node_modules/bootstrap-sass/assets/javascripts/**/*.js')
  	.pipe(rename(function(path){
  		path.basename =path.basename.substring(1)
  	}))
  	.pipe(gulp.dest('app/js/vendors'))
});


