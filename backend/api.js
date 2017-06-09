require('./db.js')
var Events = require('./Events.js');
exports.events = function (req, res) {

 require('./transactions.model');
 require('./db.js');
 var mongoose = require('mongoose');

 var transactionModel=mongoose.model('Transactions');
 var abc=null;



  transactionModel.find() .exec(function(err, transactions) {
       //console.log(transactions);
       if (err) {
         console.log("Error finding hotels");
         res
           .status(500)
           .json(err);
       } else {
         console.log("Found hotels", transactions.length);
         abc=transactions; 
         res.json(transactions);
       }
    });


};

exports.event = function (req, res) {
  res.json(Events[req.param.eventId]);
};