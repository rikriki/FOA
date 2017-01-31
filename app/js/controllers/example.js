function ExampleCtrl(ExampleService,$rootScope) {

  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love! s';
  vm.number = 1234;
  vm.riki = ExampleService.riki()

  vm.update=()=>{
  	console.log('Yow')
  	$rootScope.$broadcast('customEvent',{data:'Riki rosales'})
  }
}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
