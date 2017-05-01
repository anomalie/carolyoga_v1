(function(){
    angular
      .module('mainApp')
      .controller('soundController', soundController);
     
      soundController.$inject = ['$http','$resource'];

     function soundController($http,$resource){
        var credits = $resource('https://eaccreditlist.herokuapp.com/api/v1/credits');

        var self = this;

        // Create a promise - asynchronis
        var promise = $http.get('https://eaccreditlist.herokuapp.com/api/v1/credits').success(function(data, status, headers, config){
          return data;  
        });

        promise.then(function(response){
          self.credits = response.data;
          console.log(this.credits);
        });

        
   

     } 



})();