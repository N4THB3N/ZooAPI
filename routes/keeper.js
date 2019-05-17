'use strict'

var express = require('express');
var KeeperController = require('../controllers/keeper');

var api = express.Router();

api.post('/saveKeeper', KeeperController.saveKeeper);
api.get('/listKeeper', KeeperController.listKeeper);
api.post('/search', KeeperController.searchKeep);

module.exports = api;