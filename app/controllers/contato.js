
var listcontatos = [
  { _id: 1, nome: 'Contato Exeplo 1', email: 'cont1@empresa.com.br  ' },
  { _id: 2, nome: 'Contato Exeplo 2', email: 'cont2@empresa.com.br  ' },
  { _id: 3, nome: 'Contato Exeplo 3', email: 'cont3@empresa.com.br  ' },
  { _id: 4, nome: 'Contato Exeplo 4', email: 'cont4@empresa.com.br  ' },
  { _id: 5, nome: 'Contato Exeplo 5', email: 'cont5@empresa.com.br  ' }

];

module.exports = function(app) {

  var Contato = app.models.contato;

  var controller = {};


  controller.listaContatos = function(req, res) {
      Contato.find().exec().then(function(contatos) {
        res.json(contatos);
      }, function(erro){
        console.error(erro);
        res.status(500).json(erro);
      });

  };

  controller.obtemContato = function(req, res) {
      return findContato(req, res);
  };

  controller.removerContato = function(req, res) {
    console.log('teste');
  };

  return controller;

};

function findContato(req, res) {

  var id = req.params.id;
  var contato = listcontatos.filter(function(contato){
    return contato._id == id;
  })[0];

  if (contato) {
    res.json(contato);
  } else {
    res.status(404).send('Contato nao encontrado');
  }


}
