const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true
	},
	password: String
});

let model = mongoose.model('user', userSchema)

module.exports = model;