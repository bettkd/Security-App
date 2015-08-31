// Dependancies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var eventActionSchema = new mongoose.Schema({
	event: String,
	action_type: Number,
	note: String,
	action_by: String,
	action_time: Date
});

// Return Model
module.exports = restful.model('EventAction', eventActionSchema);
