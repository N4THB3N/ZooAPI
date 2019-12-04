'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 4022;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://nathan:<Natan-11-Dios>@cluster0-1pm9t.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})
.then((err,res)=>{
    console.log('Swited to Zoo DB');
    app.listen(port, () =>{
        console.log('The Node server and Express are running');
    });
})

.catch(err => (console.log(err)));