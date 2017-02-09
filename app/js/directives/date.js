function DateDirective() {

  return {
    restrict: 'EA',
    templateUrl: 'directives/date.html',
    scope: {
      title: '@',
      message: '@clickMessage',
      dateFrom:'@dateFrom'
    },
    link: (scope, element) => {
      // element.on('click', () => {
        
       
      //   // $rootScope.$broadcast('customEvent',{data:'Riki rosales'})
      //   window.alert('Element clicked: ' + scope.message);
      // });
      element.on('click button',function(){
        debugger
      })


    }
  };
}


export default {
  name: 'dateDirective',
  fn: DateDirective
};
