var user = require('./../controllers/users.js');
module.exports = function(app){
	app.post('/users', function(req, res){
		user.createUser(req, res);
	})
}