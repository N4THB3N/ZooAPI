'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnimalSchema = Schema({
    name: String,
    type: String,
    age: Number,
    cientificalName: String,
    keeper: {type: Schema.ObjectId, ref: 'Keeper'},
})

module.exports = mongoose.model('Animal', AnimalSchema);