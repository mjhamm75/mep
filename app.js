/* global require, process */

var express = require("express");
var logfmt = require("logfmt");
var monk = require('monk');
var db = monk('localhost:27017/express-app');


// var routes = require('./routes');
var family = require('./routes/family');

var app = express();

app.use(logfmt.requestLogger());

app.get('/', family.familyList(db));

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});