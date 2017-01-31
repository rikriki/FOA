function ExampleService($http) {
  'ngInject';

  const service = {};
  let foo = {name:'riki'}
  service.get = function() {
    return new Promise((resolve, reject) => {
      $http.get('apiPath').success((data) => {
        resolve(data);
      }).error((err, status) => {
        reject(err, status);
      });
    });
  };
  service.riki =function(){
    return foo
  }
  service.rikia =function(){
    foo = {name:'riki s'}
    return foo;
  }
  service.cart =0;

  return service;

}

export default {
  name: 'ExampleService',
  fn: ExampleService
};
