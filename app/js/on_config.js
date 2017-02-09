function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';
  console.log(process.env.NODE_ENV, 'asdasdasadsad')
  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(true);
  }
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'Home',
    data:{
      requireLogin:false
    }
  })
  .state('Module', {
    url: '/:module/create',
    controller: 'CreateCtrl as create',
    templateUrl: 'create.html',
    title: 'Create',
    data:{
      requireLogin:true
    }
  })
  .state('login',{
    url:'/login',
    controller: 'LoginModalCtrl as login',
    title: 'Login',
    templateUrl: 'login.html',
    data:{
      requireLogin:false
    }

  })
  ;

  $urlRouterProvider.otherwise('/');

 

}

export default OnConfig;
