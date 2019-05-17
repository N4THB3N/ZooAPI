'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KeeperSchema = Schema({
    name: String,
    charge: String,
    phone: String,
});

module.exports = mongoose.model('Keeper', KeeperSchema);