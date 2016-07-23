function HomeController ($scope, $http, SERVER){
  init();
  function init(){
    $http.get(`${SERVER.URL}characters/`)
      .then(function(response){
        console.log(response);
    })
  }
}

HomeController.$inject = ["$scope", "$http", "SERVER"]

export { HomeController };
