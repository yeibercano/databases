var express = require('express');
var db = require('./db');
var sql = require('mysql');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();

module.exports.app = app;

// Set what we are listening on.
app.set("port", 3001);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/classes", router);

// app.post('/classes/users', function(req, res){
//   console.log('request:', req)
//   res.send('POST REQUEST FIRED');
// });

// Serve the client files
app.use(express.static(__dirname + "/../client"));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}

