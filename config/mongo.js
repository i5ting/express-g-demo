var connectionString, db, mongoose, options;

mongoose = require('mongoose');

var host  = "127.0.0.1";
var port  = "27017";
var db    = "express-g-demo";

connectionString = 'mongodb://' + host + ':' + port + '/' + db + '';

options = {
  db: {
    native_parser: true
  },
  server: {
    auto_reconnect: true,
    poolSize: 5
  }
};

console.log(connectionString);

mongoose.connect(connectionString, options, function(err, res) {
  if (err) {
    console.log('[mongoose log] Error connecting to: ', +connectionString + '. ' + err);
    return process.exit(1);
  } else {
    return console.log('[mongoose log] Successfully connected to: ', +connectionString);
  }
});

db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error:'));

db.once('open', function() {
  return console.log('mongoose open success');
});


module.exports = db;
