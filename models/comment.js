// Dependancies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var commentSchema = new mongoose.Schema({
	event: String,
	value: String,
	comment_time: Date,
	comment_by: String,
	upvote_count: Number,
	downvote_count: Number,
	flag_count: Number,
	deleted: Boolean,
	flagged: Boolean
});

// Return Model
module.exports = restful.model('Comment', commentSchema);
