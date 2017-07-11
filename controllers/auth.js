const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

exports.signup = function(req, res){
	// res.send("user auth!");
	console.log(req.body);
	var email = req.body.email;
	var password = req.body.password;

	function createUserToken(user){
		let timestamp = new Date().getTime();
		return jwt.encode({sub: user.id,iat: timestamp }, config.secret);
	}

	User.findOne({email: email}, function(err, existingUser){
		if(err){
			return next(err);
		}
		if(existingUser){
			return res.status(418).send('This email is already in use.');
		}

		let user = new User({
			email: email,
			password: password
		});
		// if(User.email == null){
		// 	return "Please enter you email"
		// } else if (User.password == null){
		// 	return "Please enter your password"
		// }
		if(!email || !password){
			return res.status(418).send({error: 'Hey you need to put in a valid email or password.'})
		}
		user.save(function(err){
			if(err){
				return next(err)
			}
			res.json({token:createUserToken(user)})
		})
	})
}