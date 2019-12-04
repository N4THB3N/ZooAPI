'use strict'

var Keeper = require('../models/keeper');

function saveKeeper(req, res){
    var params = req.body;
    var keep = new Keeper(params);
    
              keep.save((err, keeperStored) => {
                if(err){
                  res.status(500).send({ message: err });
                }else{
                  if(!keeperStored){
                    res.status(404).send({message: 'Unable to save the user'});
                  }else{
                    res.status(200).send({keeperStored});
                  }
                }
              });
          }

  function listKeeper(req, res){
    Keeper.find({}, (err, findKeeper) => {
      if(err){
        res.status(500).send({message:err});
      }else{
        res.status(200).send({findKeeper});
      }
    });
  }

  function searchKeep(req, res){
    var params = req.body;
    Keeper.find(
      {
        $or: [
          {name: params.search },
          {charge: params.search},
          {phone: params.search}
        ]
      }
      , (err, results)=>{
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
    saveKeeper,
    listKeeper,
    searchKeep
}