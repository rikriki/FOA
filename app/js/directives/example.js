function ExampleDirective(ExampleService) {

  return {
    restrict: 'EA',
    templateUrl: 'directives/example.html',
    scope: {
      title: '@',
      message: '@clickMessage'
    },
    link: (scope, element) => {
      element.on('click', () => {
        
        ExampleService.cart = 1;
        // $rootScope.$broadcast('customEvent',{data:'Riki rosales'})
        window.alert('Element clicked: ' + scope.message);
      });
    }
  };
}


export default {
  name: 'exampleDirective',
  fn: ExampleDirective
};
