function index(req, res){
	res.render('usuario/login');
}


function login(req, res){
	res.render('usuario/login');
}

module.exports = {
	index: index,
	login: login
}
