'use strict'

var express = require('express');
var AnimalController = require('../controllers/animal');

var api = express.Router();

api.post('/saveAnimal', AnimalController.saveAnimal);
api.get('/listAnimal', AnimalController.listAnimal);
api.post('/buscarAnimal', AnimalController.searchAnimal);

/* This are some routes */

module.exports = api;

