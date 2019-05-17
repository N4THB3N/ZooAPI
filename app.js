'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var keeper_routes = require('./routes/keeper');
var animal_routes = require('./routes/animal');

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Routes from the controllers
app.use('/v1', keeper_routes);
app.use('/v1', animal_routes);



//Use in here the routes from above


module.exports = app;