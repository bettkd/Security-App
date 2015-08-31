// Dependancies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var eventSchema = new mongoose.Schema({
	description: String,
	threat_level: Number,
	location: String,
	latitude: Number,
	longitude: Number,
	occurence_time: Date,
	reported_time: Date,
	reported_by: String,
	upvote_count: Number,
	downvote_count: Number,
	flag_count: Number,
	deleted: Boolean,
	flagged: Boolean
});

// Return Model
module.exports = restful.model('Event', eventSchema);
