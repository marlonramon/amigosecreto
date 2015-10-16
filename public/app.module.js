angular
  .module('amigosecreto')
  .config(configure);

configure.$inject = ['ngRoute','ngResource'];

function configure($routeProvider){

  $routeProvider.when('/contatos', {
      templateUrl: 'partials/contatos.html',
      controller: 'contatosController'
    });

    $routeProvider.when('/contato/:contatoId', {
      templateUrl: 'partials/contato.html',
      controller: 'contatoController',
      controllerAs: 'vm'
    });

    $routeProvider.otherwise({redirectTo: '/contatos'});


}
