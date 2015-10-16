var http = require('http');

//Define o carregamento das configuracoes previamente realizado
//Existe o () pois o require devolve uma funcao
var app = require('./config/express')();

require('./config/database.js')('mongodb://localhost/amigosecreto');

//o create server recebe um listener, neste caso o listener e o Express que vai responder a cada request
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express Server escutando na porta ' + app.get('port'));
});
