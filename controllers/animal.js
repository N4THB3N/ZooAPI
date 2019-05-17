'use strict'

var Animal = require('../models/animal');

function saveAnimal(req, res){
    var params = req.body;
    var animal = new Animal(params);
    
              animal.save((err, keeperStored) => {
                if(err){
                  res.status(500).send({ message: err });
                }else{
                  if(!keeperStored){
                    res.status(404).send({message: 'Unable to save the user'});
                  }else{
                    res.status(200).send({keeper: keeperStored});
                  }
                }
              });
}

function listAnimal(req, res){
  Animal.find({}, (err, findKeeper) => {
    if(err){
      res.status(500).send({message:err});
    }else{
      res.status(200).send({findKeeper});
    }
  });
}

function searchAnimal(req, res){
  var params = req.body;
  Animal.find({
    $or: [
      {name: params.search },
      {type: params.search},
      {cientificalName: params.search}
    ]
  }, (err, results)=>{
    if(err){
      res.status(404).send({message: 'Error general'})
    }else{
      if(!results){
        res.status(200).send({message: 'No hay registros'});
      }else{
        res.status(200).send({results});
      }
    }
  });
}

module.exports = {
    saveAnimal,
    listAnimal,
    searchAnimal
}   