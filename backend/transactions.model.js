var mongoose = require('mongoose');

var TransactionSchema = new mongoose.Schema({
    TransactionID : {
      type : Number,
      required : true
    },
    Date : {
      type : Date,
      "default" : new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
    },
    TimeStamp: {
      type : Date,
      "default" : Date.now,
      required : true
    },
    Title : String,
    Description : String,
    Amount : Number,
    location : {
    // Always store coordinates longitude (East/West), latitude (North/South) order.
    coordinates : {
      type : [Number],
      index : '2dsphere'
    }
  },
    NameOfTheMerchant : String,
});
