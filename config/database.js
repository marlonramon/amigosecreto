
var mongoose = require('mongoose');

module.exports = function (uri) {
    mongoose.connect(uri);

    var connection = mongoose.connection;

    connection.on('connected', function () {
      console.log('Mongoose! Conectado em ' + uri);
    });

    connection.on('disconnected', function () {
      console.log('Mongoose! Desconectado em ' + uri);
    });

    connection.on('error', function (erro) {
      console.log('Mongoose! Erro em ' + erro);
    });


    process.on('SIGINT', function(){
      mongoose.connection.close(function () {
        console.log('Desconectado pelo termino da app');
        process.exit(0);
      });
    });

};
