App.factory('RandomService', [function(){
  var RandomService = {};
  RandomService.maxLimit = 100;
  RandomService.getRandomNumber = function(){
    return Math.ceil(Math.random() * RandomService.maxLimit); 
  };
  return RandomService;
}]);