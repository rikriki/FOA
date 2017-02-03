function LOGINSERVICE($rootScope) {
  'ngInject';

  const service = {};
  const users =[{
    email:'riki',
    password:'rosales'
  },{
    email:'diday',
    password:'rosales'
  },{
    email:'michael',
    password:'rosales'
  },{
    email:'grifett',
    password:'rosales'
  }]
  
  service.login=(email,password)=>{
    return new Promise((resolve,reject)=>{
        
        var loginUser = users.find((user)=>{
          return user.email==email && user.password==password
        })
        if(loginUser){
            
            
            resolve({user:loginUser.email,login:'success'})

        }else{
          reject({login:'fail'}) 
        }
    })
  }
  service.subscribe=(scope,callback)=>{
    var handler = $rootScope.$on('new-user-event',callback)
    scope.$on('$destroy',handler)
  }

  service.notify =(data)=>{
    $rootScope.$emit('new-user-event',data);
  }
  return service;

}

export default {
  name: 'LOGINSERVICE',
  fn: LOGINSERVICE
}
