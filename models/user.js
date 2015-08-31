// Dependancies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: String,
	password: String,
	is_staff: Boolean,
	is_superuser: Boolean,
	is_active: Boolean,
	last_login: Date,
	date_joined: Date
});

// Return Model
module.exports = restful.model('Users', userSchema);
