function AddComboController($scope, $http, SERVER, CHARACTERS, STAGES){

  init();

  function init(){
    $scope.characters = CHARACTERS;
    $scope.stages     = STAGES;
  }/* End of init function*/

  $scope.submitCombo = function(combo){
    console.log(combo)
    combo.susceptible = [];
    $http.post(SERVER.URL + "/characters", combo)
  }

}

AddComboController.$inject = ["$scope", "$http", "SERVER", "CHARACTERS", "STAGES"];

export { AddComboController };
