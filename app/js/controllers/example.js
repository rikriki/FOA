function ExampleCtrl(ExampleService,$rootScope) {

  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love! s';
  vm.number = 1234;
  vm.riki = ExampleService.riki()
  vm.tabs = [
    { title:'Round trip', content:'Dynamic content 1' },
    { title:'One way', content:'Dynamic content 2'},
    { title:'Multi trip', content:'Dynamic content 3' }
  ];

  vm.dateFrom='01/12/2016';
  vm.update=()=>{
  	console.log('Yow')
  	$rootScope.$broadcast('customEvent',{data:'Riki rosales'})
  }

  vm.results = {
    from:vm.from || '',
    to:vm.to || '',
    dateFrom:vm.dateFrom,
    dateTo:vm.dateTo || '',

  }
}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
