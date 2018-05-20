var module = angular.module('myApp',[]); // used to configure injector

// provider

module.provider('myProvider',function(){
    this.value = "New value";
    
    this.setValue = function(newValue){
        this.value = newValue;
    }
    
    this.$get = function(){
        console.log('In provider');
        return 'my provider value'+this.value;
    }
});

module.factory('myFactory',function(){
        console.log('In factory');
        return new function(){
          this.getValue = function(){
              return 'My value';
          }  
        };
});


module.service('myService',function(){
          this.getValue = function(){
              return 'My value in service';
         
        };
    }
);


module.controller('myController',function(myProvider){
    
    console.log(myProvider);
});

module.controller('myController2',function(myProvider){
    console.log(myProvider);
});

// To configure value in provider use config function

module.config(function(myProviderProvider){
    myProviderProvider.setValue('5');
});

// using config o/p will be 
/*
In provider
my provider value5
my provider value5
In factory
My value
My value
My value in service
My value in service
*/

module.controller('myFactory',function(myFactory){
    console.log(myFactory.getValue());
});

module.controller('myFactory2',function(myFactory){
    console.log(myFactory.getValue());
});

module.controller('myService',function(myService){
    console.log(myService.getValue());
});

module.controller('myService2',function(myService){
    console.log(myService.getValue());
});