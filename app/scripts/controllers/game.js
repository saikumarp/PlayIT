App.controller('GameCtrl', ['$scope','RandomService', function($scope, RandomService){
  /*Team Members Stored in Array.*/
  $scope.teamA = [];
  $scope.teamB = [];
  $scope.teamATotal = 0;
  $scope.teamBTotal = 0;
  $scope.showPopup = false;
  $scope.message = '';

  /*Add Players into Team*/
  $scope.addPlayer = function(team) {
    switch(team) {
      case 'A':
        $scope.teamA.push({name: $scope.playerA, score: RandomService.getRandomNumber()});
        $scope.playerA = "";
        break;
      case 'B':
        $scope.teamB.push({name: $scope.playerB, score: RandomService.getRandomNumber()});
        $scope.playerB = "";
        break;
    }
  };
  $scope.showTotalScore = function(team) {
    switch(team) {
      case 'A':
        $scope.teamATotal = 0;
        angular.forEach($scope.teamA, function(player) {
          $scope.teamATotal = $scope.teamATotal + player.score;
        });
        $scope.message = 'Total Score of Team A:- ' + $scope.teamATotal;
        break;
      case 'B':
        $scope.teamBTotal = 0;
        angular.forEach($scope.teamB, function(player) {
          $scope.teamBTotal = $scope.teamBTotal + player.score;
        });
        $scope.message = 'Total Score of Team B:- ' + $scope.teamBTotal;
        break;
    }
    $scope.showPopup = true;
  };

  $scope.checkLimit = function(team) {
    if(team.length === 11) {
      $scope.message = 'Team Limit Exceeds...';
      $scope.showPopup = true;  
    }
  };

  $scope.showWinner = function() {
    $scope.teamATotal = 0;
    angular.forEach($scope.teamA, function(player) {
      $scope.teamATotal = $scope.teamATotal + player.score;
    });

    $scope.teamBTotal = 0;
    angular.forEach($scope.teamB, function(player) {
      $scope.teamBTotal = $scope.teamBTotal + player.score;
    });

    $scope.message = 'Congrats, Winner is Team-' + ($scope.teamATotal < $scope.teamBTotal ? 'B' : 'A');
    $scope.showPopup = true; 
  }; 
}]);