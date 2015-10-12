angular.module('amigosecreto',['ngRoute'])
  .config(function($routeProvider){

    $routeProvider.when('/contatos', {
      templateUrl: 'partials/contatos.html',
      controller: 'contatosController'
    });

    $routeProvider.when('/contato/:contatoId', {
      templateUrl: 'partials/contato.html',
      controller: 'contatoController',
      controllerAs: 'vm'
    });

    $routeProvider.otherwise({redirectTo: "/contatos"});


});
