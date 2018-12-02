var mysql = require('mysql');
// Create connection.
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'adCraftDb'
});
// Connect with the database.
conniction.connect(function(err) {
	if(!err) {
		console.log("Database is connected");
	} else {
		console.log("Error connecting database");
	}
});

module.exports = connecting;