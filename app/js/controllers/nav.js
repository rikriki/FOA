function navCtrl(ExampleService,$scope,$rootScope) {

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
  $rootScope.$on('update-cart',function(scope,data){
    $scope.cart = data
  })
  
}

export default {
  name: 'navCtrl',
  fn: navCtrl
};
