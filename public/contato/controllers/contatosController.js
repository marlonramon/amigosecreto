'use strict';

angular
  .module('amigosecreto')
  .controller('contatosController', contatosController);

contatosController.$inject = ['contatosFactory'];

function contatosController(contatosFactory) {
  /* jshint validthis: true */
  var vm = this;
  vm.contatos = {};

  activate();

  function activate() {
    return contatosFactory.getContatos().then(function (data) {
       vm.contatos = data.data;
       console.log(JSON.stringify(vm.contatos));
    });

  }


}
