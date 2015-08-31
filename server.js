// Dependancies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/security_api');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/v1', require('./routes/v1/api'));

// Start Server
app.listen(3000);
console.log('API is running on port 3000.');