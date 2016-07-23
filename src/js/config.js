function config($stateProvider, $urlRouterProvider){

  $stateProvider
    .state("root", {
      abstract: true,
      templateUrl: "templates/root.tpl.html"
    })
    .state("root.home", {
      url: "/",
      templateUrl: "templates/home.tpl.html",
      controller: "HomeCtrl"
    })
    .state("root.add", {
      url: "/add",
      templateUrl: "templates/add_combo.tpl.html",
      controller: "AddCtrl"
    })

    $urlRouterProvider.otherwise("/");

}

config.$inject = ["$stateProvider", "$urlRouterProvider"];

export { config };
