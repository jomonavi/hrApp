var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost/hrApp';
mongoose.connect(dbUrl);

require('../models/employee');
require('../models/team');

// Close the Mongoose connection on Control+C
process.on('SIGINT', function() {
  	mongoose.connection.close(function () {
    	console.log('Mongoose default connection disconnected');
    	process.exit(0);
	}); 
});
