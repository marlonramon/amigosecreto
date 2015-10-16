'use strict';

angular
  .module('amigosecreto')
  .factory('contatosFactory', contatosFactory);

contatosFactory.$inject = ['$http'];

function contatosFactory($http) {
  return {
    getContatos: getContatos
  };



  function getContatos() {
      return $http.get('/contatos')
        .then(getContatosComplete)
        .catch(getContatosFailed);

      function getContatosComplete(data) {
        return data;
      }

      function getContatosFailed(error) {
        console.log('deu erro' + error);
      }
  }
}
