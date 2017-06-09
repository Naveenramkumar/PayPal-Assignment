var mongoose = require('mongoose');
var dburl = 'mongodb://naveenrk93:blaziken99@ds139949.mlab.com:39949/paypaldb'
var retry = null;
mongoose.connect(dburl);

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dburl);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
function gracefulShutdown(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
}

// For nodemon restarts
process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', function() {
  gracefulShutdown('App termination (SIGINT)', function() {
    process.exit(0);
  });
});
// BRING IN YOUR SCHEMAS & MODELS
require('./transactions.model');
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
var transactionModel=mongoose.model('Transactions', TransactionSchema);




















