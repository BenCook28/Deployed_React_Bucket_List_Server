const Auth = require('./controllers/auth');
const User = require('./models/user');

module.exports = function(app){
	app.post('/signup', Auth.signup);
}