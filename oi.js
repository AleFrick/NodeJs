var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
	if(req.url == '/'){
		res.write('<center><h1>Seja Bem vindo!</h1></center>');	
	}else if(req.url == '/outra'){
		res.write('<center><h1>Outra Página!</h1></center>');		
	}else{
		res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
		res.write('<center><h1>Página não encontrada</h1></center>');
		console.log('Não encontro');
	}
	console.log(req.url);
	res.end();
});

server.listen(3000);
console.log('Servidor rodando');