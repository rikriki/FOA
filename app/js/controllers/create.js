function CreateCtrl(ExampleService,$stateParams,$rootScope) {

  // ViewModel
  const module = $stateParams.module
  const create = this;

  create.title = 'Create a new ' + module;
  create.number = 1234;
  create.riki = ExampleService.riki()
  create.updateCart = ()=>{
  	
  	$rootScope.$emit('update-cart',2)
  }
}

export default {
  name: 'CreateCtrl',
  fn: CreateCtrl
};
