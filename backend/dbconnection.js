var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://naveenrk93:blaziken99@ds139949.mlab.com:39949/paypaldb'
//var dburl = 'mongodb://localhost:27017/meanhotel';

var _connection = null;

var open = function() {
  MongoClient.connect(dburl, function(err, db) {
    if (err) {
      console.log("DB connection failed");
      return;
    }
    _connection = db;
    console.log("DB connection open");
  });
};

var get = function() {
  return _connection;
};

module.exports = {
  open : open,
  get : get
};