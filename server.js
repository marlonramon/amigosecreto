var http = require('http');

//Define o carregamento das configuracoes previamente realizado
var app = require('./config/express')();

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express Server escutando na porta ' + app.get('port'));
})
