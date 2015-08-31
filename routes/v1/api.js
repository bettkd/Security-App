// Dependancies
var express = require('express');
var router  = express.Router();

// Models
var User = require('../../models/user');
var Event = require('../../models/event');
var EventAction = require('../../models/event_action');
var Comment = require('../../models/comment');
var CommentAction = require('../../models/comment_action');

// Routes
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

Event.methods(['get', 'put', 'post', 'delete']);
Event.register(router, '/events');

EventAction.methods(['get', 'put', 'post', 'delete']);
EventAction.register(router, '/event_actions');

Comment.methods(['get', 'put', 'post', 'delete']);
Comment.register(router, '/comments');

CommentAction.methods(['get', 'put', 'post', 'delete']);
CommentAction.register(router, '/comment_actions');

// Return router
module.exports = router;