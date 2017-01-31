function cartCtrl(ExampleService,$scope,$rootScope) {

  // ViewModel
  $scope.cart = 0; 
  $scope.cart = ExampleService.cart;
  // $scope.$watch(function(){
  //       return ExampleService.cart;
  //     }, function(newVal, oldVal){
  //     	debugger
  //       if(newVal)
  //       	return oldVal 
  //       	//Tree.Build(function(response){ scope.data = response; Tree.rebuild = false; });
  //     // }
  // })
  $scope.$watch('cart',function(){
  	
  })
  $rootScope.emit = ()=>{
    $scope.$emit('update-cart','2')
  	$scope.cart = 1; 
  }


}

export default {
  name: 'cartCtrl',
  fn: cartCtrl
};
