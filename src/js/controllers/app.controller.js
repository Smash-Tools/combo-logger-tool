function AppController ($scope, $http, SERVER){
  init();
  function init(){
    $http.post(SERVER.URL, {
      name: "Fox McCloud",
      img: "http://placekitten.com/500/500"
     }).then(function(response){
      console.log(response)
    })
  }
}

AppController.$inject = ["$scope", "$http", "SERVER"]

export { AppController };
