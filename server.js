var _ = require('underscore');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/www'));
app.use('/lib', express.static(__dirname + '/bower_components'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var controllers = [
	'admin',
	'client'
];

_.each(controllers, function(controller) {
	require('./controller/' + controller + 'Ctrl').register(app);
});


app.listen(3030);
console.log("server is started on http://localhost:3030");
