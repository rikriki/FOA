function LoginModalCtrl($scope,LOGINSERVICE,$rootScope,$state) {
  
  this.cancel = $scope.$dismiss;
  this.submit = function (email, password) {
    
      console.log(email,'/',password)
      LOGINSERVICE.login(email,password).then(function(data){
        $rootScope.currentUser = data.user
        LOGINSERVICE.notify(data)
        console.log(data)
        $state.go('Home')

      },function(data){
        console.log('reject',data)
        

      })
      // $scope.$close({username:'riki'});
  };
  // this.submit = function (email, password) {
  //   UsersApi.login(email, password).then(function (user) {
  //     $scope.$close(user);
  //   });
  // };

}

export default {
  name: 'LoginModalCtrl',
  fn: LoginModalCtrl
};


