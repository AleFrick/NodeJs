
/*
 * GET home page.
 */
var admin = require('./admin');
var usuario = require('./usuario');

function index(req, res){
  res.render('index', { title: 'Express' });
};

module.exports = {
	index: index,
	admin: admin,
	usuario: usuario
};

